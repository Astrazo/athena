import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, doc, addDoc, updateDoc,
    query, where, orderBy, getDocs, arrayUnion, arrayRemove, getDoc, onSnapshot, deleteDoc, deleteField,
    increment
} from "firebase/firestore";
import { roomActions } from "/room-actions.js";
import { roomPuzzles } from "/room-puzzles.js";
import { dialogue } from "./dialogue";

const firebaseConfig = {
    apiKey: "AIzaSyDzgDI28nu9RGm32mJH-1tvkZCQOdEjdrk",
    authDomain: "athena-astrazo.firebaseapp.com",
    projectId: "athena-astrazo",
    storageBucket: "athena-astrazo.firebasestorage.app",
    messagingSenderId: "879430407218",
    appId: "1:879430407218:web:6c514226b384a7857b182b"
};
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export async function createRoom(name) {
    const docRef = await addDoc(collection(db, "rooms"), {
        name,
        created: Date.now(),
        status: "waiting",
        currentDay: 0,
        players: {}
    });
    return docRef.id;
}

export async function createUser(userName, roomName, roomId) {
    const docRef = await addDoc(collection(db, "users"), {
        userName,
        created: Date.now(),
        roomName,
        roomId
    });
    return docRef.id;
}

export async function addUserToRoom(userId, userName, roomId, isHost) {
    const roomRef = doc(db, "rooms", roomId);
    await updateDoc(roomRef, {
        [`players.${userId}`]: { 
            name: userName,     
            role: null, 
            readyStatus: 0, 
            isHost, 
            enablerComplete: false,
            enabledComplete: false,
            enabledValue: null } // need dot notation here for Firebase because it thinks it's special
        //players: arrayUnion({ id: userId, name: userName, role: "None", readyStatus: "0" })
    });
}

export async function removeUserFromRoom(userId, userName, userRole, roomId) {
    const roomRef = doc(db, "rooms", roomId);
    
    // Remove from room
    await updateDoc(roomRef, {
        [`players.${userId}`]: deleteField()
        //players: arrayRemove({ id: userId, name: userName, role: userRole, readyStatus: localStorage.getItem("readyStatus") || "0" })
    });
    
    // Remove from users (if not in a room, the user should not exist)
    //const userRef = doc(db, "users", userId);
    //await deleteDoc(userRef);
}

export async function loadRooms(status = null, roomId = null) {
    if (roomId) {
        const dSnap = await getDoc(doc(db, "rooms", roomId));
        if (!dSnap.exists()) return null;
        const data = dSnap.data();
        return { roomName: data.name, roomPlayers: data.players };
    }

    // For each document in the rooms collection, return it's ID, name, and players list
    if (status) {
        const snap = await getDocs(
        query(collection(db, "rooms"),
                where("status", "==", status),
                orderBy("created", "desc"))
        );
        return snap.docs.map(d => ({
        roomId: d.id,
        roomName: d.data().name,
        roomPlayers: d.data().players
    }));
  }
  return [];
}

export async function updatePlayer(userId, roomId, key, value) {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);

    if (roomSnap.exists()) {
        await updateDoc(roomRef, {
            [`players.${userId}.${key}`]: value
        });
    }
}

export async function progressDay(roomId) {
    const roomRef = doc(db, "rooms", roomId);
    localStorage.setItem("introDialogueSeen", "0")
    await updateDoc(roomRef, {
        currentDay: increment(1)
    });
}

export async function deleteRoom(roomId) {
    const roomRef = doc(db, "rooms", roomId);
    await deleteDoc(roomRef);
}

export function listenToRoom(roomId, callback) {
    const roomRef = doc(db, "rooms", roomId);
    return onSnapshot(roomRef, (doc) => {
        if (doc.exists()) {
            const data = doc.data();
            callback({ roomId: roomId, roomName: data.name, roomPlayers: data.players, currentDay: data.currentDay });
        } else {
            callback(null);
        }
    });
}

export function listenToAllRooms(callback) {
    const roomsRef = collection(db, "rooms");
    const q = query(roomsRef, where("status", "==", "waiting"), orderBy("created", "desc"));
    
    return onSnapshot(q, (snapshot) => {
        const rooms = snapshot.docs.map(doc => ({
            roomId: doc.id,
            roomName: doc.data().name,
            roomPlayers: doc.data().players
        }));
        callback(rooms);
    });
}

// Function used show correct action dialogue and puzzles if they're in a room where the actions can do something
function isRoomActionableRightNow(currentDay, currentRole, roomName, enablerComplete, enabledComplete, enabledPossible) {
    // First, see if for this day, this role is ever in this room
    const dialogueToShow = dialogue?.[currentDay]?.[currentRole]?.[roomName] || null;
    // If nothing has been returned, that means the user is in the wrong room entirely
    if (dialogueToShow === null) {
        return [false, null];
    }
    // If something has been returned, we need to check if it's something they can do right now
    else {
        // Check what task they have in this room (enabler or enabled)
        const enablerTask = dialogueToShow?.["enabler"] || false;

        // If this room has an enabler task, check to see if they've already done it
        if (enablerTask) {
            return !enablerComplete ? [true, "enabler"] : [false, null];
        }
        // Otherwise if this room has an enabled task, check to see if it's already done, or if they're yet to be able to do it
        else {
            return (!enabledComplete && enabledPossible) ? [true, "enabled"] : [false, null];
        }
    }
}

export function generateActions(roomData, roomName, currentRole, actionsContainer) {
    // Get current day
    const currentDay = roomData["currentDay"]

    // Get localUserId
    const localUserId = localStorage.getItem("connectedUserId");

    // Get the available actions
    const availableActions = roomActions[currentDay][currentRole][roomName];

    // Get puzzle status the player has for the current day
    const enablerComplete = roomData["roomPlayers"][localUserId]["enablerComplete"];
    const enabledComplete = roomData["roomPlayers"][localUserId]["enabledComplete"];
    const enabledPossible = roomData["roomPlayers"][localUserId]["enabledValue"] != null;

    
    // Clear existing buttons
    actionsContainer.innerHTML = "";

    // Check if room is actionable at this point in time
    const [isRoomActionable, puzzleToGenerate] = isRoomActionableRightNow(
        currentDay, 
        currentRole, 
        roomName, 
        enablerComplete, 
        enabledComplete, 
        enabledPossible
    );
    console.log(`Player has entered an actionable room: ${isRoomActionable}`)

    // Loop through each key in the action dictionary
    for (const [actionKey, actionText] of Object.entries(availableActions)) {

        // Generate all by CORRECT_ACTION
        if (actionKey != "CORRECT_ACTION") {
            const button = document.createElement("button");
            button.id = actionKey.replace(/\s+/g, "").toLowerCase() + "Btn";
            button.className = "std-button role-button";
            button.style.width = "250px";
            button.textContent = actionKey;

            // If they're not in the correct room at the moment, all actions should be dead, so show the dialogue for that
            if (!isRoomActionable) {
                actionText = roomActions["NO-ACTION"]
            }

            // Handle action click
            button.onclick = async () => {
                // Show room-action dialogue for this button
                await typewriter.showSequence(
                    actionText
                );
                console.log("Made past dialogue");
                // If this button is the correct action to take, show the puzzle
                if (actionKey === availableActions["CORRECT_ACTION"]) {
                    console.log("Correct action clicked");
                    // Hide actions
                    actionsContainer.innerHTML = "";

                    // Show puzzle
                    const puzzleDiv = document.getElementById("availableActions");
                    generatePuzzle(puzzleDiv, currentDay, roomName, currentRole, puzzleToGenerate);
                }
                else {
                    // Show dialogue
                    console.log("Incorrect action clicked");
                }
            };
            actionsContainer.appendChild(button);
        }
    }
}

export function updateRoleList(roomData, playersList) {
    // Clear role list
    playersList.innerHTML = "";
    
    if (roomData && roomData["roomPlayers"]) {
        // Display player list
        Object.entries(roomData["roomPlayers"]).forEach(([playerId, player]) => {
            const li = document.createElement("li");
            const roleNames = {
                "ds": "Data Scientist",
                "se": "Software Engineer",
                "ne": "Network Engineer",
                "ca": "Cybersecurity Analyst"
            };
            const roleName = roleNames[player["role"]] || "Unassigned";
            li.textContent = `${player["name"]} - ${roleName}`;
            if (playerId === localStorage.getItem("connectedUserId")) {
                li.classList.add("current-player");
                li.style.fontWeight = "bold";
                li.style.color = "#4CAF50";
            }
            playersList.appendChild(li);
        });
    }
}

export function generatePuzzle(puzzleDiv, currentDay, roomName, currentRole, puzzleType) {
    // Get puzzle data
    const puzzleData = roomPuzzles[currentDay]?.[currentRole]?.[roomName]?.[puzzleType];
    
    if (!puzzleData) {
        console.error("Puzzle data not found for:", { currentDay, roomName, currentRole, puzzleType });
        return;
    }

    // Clear the puzzle div
    puzzleDiv.innerHTML = "";

    // Create puzzle container
    const puzzleContainer = document.createElement("div");
    puzzleContainer.className = "puzzle-container";

    // Create puzzle title
    const puzzleTitle = document.createElement("h2");
    puzzleTitle.className = "puzzle-title";
    puzzleTitle.textContent = "Security Analysis Task";
    puzzleContainer.appendChild(puzzleTitle);

    // Create puzzle description
    const puzzleDescription = document.createElement("p");
    puzzleDescription.className = "puzzle-description";
    puzzleDescription.textContent = "Review the network activity log below and identify the suspicious entry that indicates automated reconnaissance activity.";
    puzzleContainer.appendChild(puzzleDescription);

    // Create table container
    const tableContainer = document.createElement("div");
    tableContainer.className = "puzzle-table-container";

    // Create table
    const table = document.createElement("table");
    table.className = "puzzle-table";

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    
    puzzleData.tableHeaders.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");
    
    puzzleData.tableRows.forEach((row, rowIndex) => {
        const tr = document.createElement("tr");
        tr.className = "puzzle-row";
        tr.dataset.rowIndex = rowIndex;
        
        row.forEach(cellData => {
            const td = document.createElement("td");
            td.textContent = cellData;
            tr.appendChild(td);
        });
        
        // Add click handler for row selection
        tr.addEventListener("click", () => {
            // Remove previous selection
            document.querySelectorAll(".puzzle-row.selected").forEach(row => {
                row.classList.remove("selected");
            });
            
            // Select this row
            tr.classList.add("selected");
        });
        
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    puzzleContainer.appendChild(tableContainer);

    // Create instruction text
    const instruction = document.createElement("p");
    instruction.className = "puzzle-instruction";
    instruction.textContent = "Click on the suspicious activity entry, then click Submit Answer.";
    puzzleContainer.appendChild(instruction);

    // Create button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "puzzle-button-container";

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.className = "std-button puzzle-submit";
    submitButton.textContent = "Submit Answer";
    
    submitButton.addEventListener("click", async () => {
        const selectedRow = document.querySelector(".puzzle-row.selected");
        
        if (!selectedRow) {
            // Show error message
            const errorMsg = document.createElement("div");
            errorMsg.className = "puzzle-error";
            errorMsg.textContent = "Please select a row first!";
            puzzleContainer.appendChild(errorMsg);
            
            // Remove error after 3 seconds
            setTimeout(() => {
                if (errorMsg.parentNode) {
                    errorMsg.remove();
                }
            }, 3000);
            return;
        }
        
        const selectedIndex = parseInt(selectedRow.dataset.rowIndex);
        const isCorrect = selectedIndex === puzzleData.correctAnswerIndex;
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = "Processing...";
        
        // Show feedback
        const feedbackMessages = isCorrect ? puzzleData.feedback.correct : puzzleData.feedback.incorrect;
        
        await typewriter.showSequence(feedbackMessages, {
            onComplete: () => {
                if (isCorrect) {
                    // Mark puzzle as complete
                    const userId = localStorage.getItem("connectedUserId");
                    const roomId = localStorage.getItem("connectedRoomId");
                    updatePlayer(userId, roomId, "enablerComplete", true);
                    
                    // Show success message
                    typewriter.showSequence([
                        "Puzzle completed successfully!",
                        "You can now explore other rooms to help your team."
                    ], {
                        onComplete: () => {
                            // Hide puzzle and return to room
                            puzzleDiv.innerHTML = "";
                            // You might want to regenerate actions here
                        }
                    });
                } else {
                    // Re-enable submit button for retry
                    submitButton.disabled = false;
                    submitButton.textContent = "Submit Answer";
                }
            }
        });
    });
    
    buttonContainer.appendChild(submitButton);
    puzzleContainer.appendChild(buttonContainer);
    puzzleDiv.appendChild(puzzleContainer);
}



