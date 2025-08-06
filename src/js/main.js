// Browser Navigation Restrictions
// Simple and effective back/forward button blocking
(function() {
    // Force forward navigation to prevent back button
    window.history.forward();
    
    function noBack() {
        window.history.forward();
    }
    
    // Call noBack on page load and various events
    window.addEventListener('load', noBack);
    window.addEventListener('pageshow', noBack);
    window.addEventListener('focus', noBack);
    
    // Disable refresh shortcuts and show popup
    document.addEventListener('keydown', function(e) {
        // Prevent F5, Ctrl+R, Ctrl+Shift+R (refresh)
        if (e.key === 'F5' || 
            (e.ctrlKey && e.key === 'r') || 
            (e.ctrlKey && e.shiftKey && e.key === 'R')) {
            e.preventDefault();
            return false;
        }
        
        // Prevent Alt+Left/Right (back/forward)
        if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
            e.preventDefault();
            return false;
        }
    });
})();

import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, doc, addDoc, updateDoc,
    query, where, orderBy, getDocs, arrayUnion, arrayRemove, getDoc, onSnapshot, deleteDoc, deleteField,
    increment
} from "firebase/firestore";
import { roomActions } from "./room-actions.js";
import { roomPuzzles } from "./room-puzzles.js";
import { enablerMap } from "./enabler-map.js";
import { dialogue } from "./dialogue.js";


const firebaseConfig = {
    apiKey: "AIzaSyAzlzCHei-FyaNyWRZ7Or-iLTdQRGjLWUY",
    authDomain: "athena2-f5bdf.firebaseapp.com",
    projectId: "athena2-f5bdf",
    storageBucket: "athena2-f5bdf.firebasestorage.app",
    messagingSenderId: "571762315023",
    appId: "1:571762315023:web:09aea3b0fdf575ab79387a"
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

export async function loadRooms(status = null, roomId = null, dayValue = null) {
    if (roomId) {
        const dSnap = await getDoc(doc(db, "rooms", roomId));
        if (!dSnap.exists()) return null;
        const data = dSnap.data();
        return { 
            "roomName": data.name, 
            "roomPlayers": data.players, 
            "currentDay": data.currentDay,
            "dayScores": data.dayScores
        };
    }

    // For each document in the rooms collection, return it's ID, name, and players list
    if (status) {
        const snap = await getDocs(
        query(collection(db, "rooms"),
                where("status", "==", status),
                orderBy("created", "desc"))
        );
        return snap.docs. map(d => ({
            "roomId": d.id,
            "roomName": d.data().name,
            "roomPlayers": d.data().players,
        }))
    }; 

    // For each document in the rooms collection, return it's ID, name, and players list
    if (dayValue) {
        const snap = await getDocs(
        query(collection(db, "rooms"),
                where("day", "==", dayValue),
                orderBy("created", "desc"))
        );
        return snap.docs. map(d => ({
            "roomId": d.id,
            "roomName": d.data().name,
            "roomPlayers": d.data().players,
        }))
    }; 
  return [];
}

export async function updatePlayer(userId, roomId, key, value) {
    const loadingContainer = document.getElementById("loadingContainer");
    if (loadingContainer) loadingContainer.style.display = "flex";

    try {
        if (!userId || !roomId || !key) {
            throw new Error(`updatePlayer failed: userId (${userId}), roomId (${roomId}), or key (${key}) is null or undefined.`);
        }

        const roomRef = doc(db, "rooms", roomId);
        const roomSnap = await getDoc(roomRef);

        if (roomSnap.exists()) {
            await updateDoc(roomRef, {
                [`players.${userId}.${key}`]: value
            });
        } else {
            console.warn(`updatePlayer warning: Room ${roomId} does not exist.`);
        }
    } catch (err) {
        console.error("updatePlayer error:", err);
    } finally {
        if (loadingContainer) loadingContainer.style.display = "none";
    }
}

export async function progressDay(roomId, completeDay = false) {
    const roomRef = doc(db, "rooms", roomId);
    if (!completeDay) {
        await updateDoc(roomRef, {
            currentDay: increment(1)
        });
    }
    else {
        await updateDoc(roomRef, {
            currentDay: -1
        });
    }   
}

export async function ackReshuffle(roomId) {
    const roomRef = doc(db, "rooms", roomId);
    await updateDoc(roomRef, {
        "ackReshuffle": increment(1)
    });
}

export async function incrementEnabledCompletions(roomId, reset=false) {
    const roomRef = doc(db, "rooms", roomId);
    if (!reset) {
        await updateDoc(roomRef, {
            "enabledCompletions": increment(1)
        });
    }
    else {
        await updateDoc(roomRef, {
            "enabledCompletions": 0
        });
    }
    
}

export async function appendDayScore(roomId, newDayScore) {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);

    if (roomSnap.exists()) {
        const currentScores = roomSnap.data()["dayScores"] || [];
        const updatedScores = [...currentScores, newDayScore];

        await updateDoc(roomRef, {
            "dayScores": updatedScores
        });
    } else {
        console.error("Room does not exist");
    }
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
            callback({ 
                "roomId": roomId, 
                "roomName": data.name, 
                "roomPlayers": data.players, 
                "currentDay": data.currentDay, 
                "enabledCompletions": data.enabledCompletions,
                "ackReshuffle": data.ackReshuffle });
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
export function isRoomActionableRightNow(currentDay, currentRole, roomName, enablerComplete, enabledComplete, enabledPossible) {

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

export function generateActions(roomData, roomName, currentRole, actionsContainer, blockActions = false) {
    // Get current day
    const currentDay = roomData["currentDay"];

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
    console.log(`Puzzle to be generated: ${puzzleToGenerate}`)

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
            let finalActionText = actionText;
            if (!isRoomActionable || blockActions) {
                finalActionText = roomActions["NO-ACTION"]
            }

            // Handle action click
            button.onclick = async () => {
                // Show room-action dialogue for this button
                await typewriter.showSequence(
                    finalActionText
                );
                // If this button is the correct action to take, show the puzzle
                if (actionKey === availableActions["CORRECT_ACTION"] && !blockActions) {
                    console.log("Correct action clicked");

                    if (puzzleToGenerate != null) {
                         // Hide actions
                        actionsContainer.innerHTML = "";

                        // Show puzzle
                        //const puzzleDiv = document.getElementById("availableActions");
                        generatePuzzle(actionsContainer, currentDay, roomName, currentRole, puzzleToGenerate, roomData);
                    }     
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
        // Sort players alphabetically by name
        const sortedPlayers = Object.entries(roomData["roomPlayers"]).sort((a, b) => {
            const nameA = a[1].name.toLowerCase();
            const nameB = b[1].name.toLowerCase();
            return nameA.localeCompare(nameB);
        });
        
        // Display player list
        sortedPlayers.forEach(([playerId, player]) => {
            const li = document.createElement("li");
            const roleNames = {
                "ds": "Data Scientist",
                "se": "Software Engineer",
                "ne": "Network Engineer",
                "ca": "Cybersecurity Analyst"
            };
            
            // Debug: log the role value to see what's actually stored
            console.log(`Player ${player["name"]} has role:`, player["role"]);
            
            const roleName = roleNames[player["role"]] || "Unassigned";
            li.innerHTML = `${player["name"].replace("You", "<br>")} - ${roleName}`;
            if (playerId === localStorage.getItem("connectedUserId")) {
                li.classList.add("current-player");
                li.style.fontWeight = "bold";
                li.style.color = "#4CAF50";
            }
            playersList.appendChild(li);
        });
    }
}

export async function generatePuzzle(actionsContainer, currentDay, roomName, currentRole, puzzleType, roomData) {
    // Get puzzle data
    const puzzleData = roomPuzzles[currentDay]?.[currentRole]?.[roomName]?.[puzzleType];
    console.log(`PuzzleData ${puzzleData}`);

    if (!puzzleData) {
        console.error("Puzzle data not found for:", { currentDay, roomName, currentRole, puzzleType });
        return;
    }

    // Clear the puzzle div
    actionsContainer.innerHTML = "";

    // Create puzzle container
    const puzzleContainer = document.createElement("div");
    puzzleContainer.className = "puzzle-container";

    // Create puzzle title
    const puzzleTitle = document.createElement("h2");
    puzzleTitle.className = "puzzle-title";
    puzzleTitle.textContent = puzzleData["title"];
    puzzleContainer.appendChild(puzzleTitle);

    // Create puzzle description
    const puzzleDescription = document.createElement("p");
    puzzleDescription.className = "puzzle-description";
    puzzleDescription.innerHTML = puzzleData["prompt"];
    puzzleContainer.appendChild(puzzleDescription);

    // Create table container
    const tableContainer = document.createElement("div");
    tableContainer.className = "game-table-container";

    // Create table
    const table = document.createElement("table");
    table.className = "game-table";

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    
    puzzleData["tableHeaders"].forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");
    
    puzzleData["tableRows"].forEach((row, rowIndex) => {
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

    // Create hint text
    const hints = document.createElement("p");
    hints.className = "puzzle-instruction";
    hints.textContent = puzzleData["hint"] || "No hint available";
    hints.style.display = "none";
    puzzleContainer.appendChild(hints);

    // Track if hint was used
    let hintUsed = false;

    // Create button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "puzzle-button-container";

    // Create hint button
    const hintButton = document.createElement("button");
    hintButton.className = "std-button puzzle-hint"; // Use the new class
    hintButton.textContent = "Show Hint";
    hintButton.style.marginRight = "10px";

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.className = "std-button puzzle-submit";
    submitButton.textContent = "Submit Answer";

    // Hint button work
    hintButton.addEventListener("click", () => {
        hints.style.display = "block";
        hintButton.style.display = "none";
        hintUsed = true;
    })
    
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
        const isCorrect = selectedIndex === puzzleData["correctAnswerIndex"];
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = "Processing...";
        
        // Determine which puzzle type was completed
        const puzzleCompletionType = puzzleType === "enabler" ? "enablerComplete" : "enabledComplete";
        
        // Get current completion status
        const localUserId = localStorage.getItem("connectedUserId");
        const currentEnablerComplete = roomData["roomPlayers"][localUserId]["enablerComplete"];
        const currentEnabledComplete = roomData["roomPlayers"][localUserId]["enabledComplete"];

        // Now update local storage too based on what task was just completed
        localStorage.setItem("enablerComplete", "enabler" === puzzleType);
        localStorage.setItem("enabledComplete", "enabled" === puzzleType);
        
        // Determine completion status after this puzzle is completed
        const willBeEnablerComplete = puzzleType === "enabler" ? true : currentEnablerComplete;
        const willBeEnabledComplete = puzzleType === "enabled" ? true : currentEnabledComplete;
        
        // Check if both tasks will be complete after this puzzle
        const bothTasksComplete = willBeEnablerComplete && willBeEnabledComplete;
        
        // Determine completion message
        const baseDialogue = isCorrect ? puzzleData["feedback"]["correct"].slice(0, -1) : puzzleData["feedback"]["incorrect"].slice(0, -1);
        const completionMessage = bothTasksComplete 
            ? "You feel like you've done all you can for today, return to the situation room and wait for your teammates to finish up."
            : "You should investigate other rooms in case you can assist further.";

        // Here do the split of the last line again from default Dialogue, 
        
        await typewriter.showSequence([...baseDialogue, completionMessage], {
            onContinue:  async () => {
                // Mark puzzle as complete
                const userId = localStorage.getItem("connectedUserId");
                const roomId = localStorage.getItem("connectedRoomId");
                updatePlayer(userId, roomId, puzzleCompletionType, true);
                
                // Replace the puzzleDiv with the action buttons
                actionsContainer.innerHTML = "";
                generateActions(roomData, roomName, currentRole, actionsContainer, true)

                // Construct diciontary with results to append to puzzleAnswers
                const results = {
                    "day": currentDay,
                    "type": puzzleType,
                    "room": roomName,
                    "role": currentRole,
                    "correct": isCorrect,
                    "selectedIndex": selectedIndex,
                    "hintUsed": hintUsed,
                    "timestamp": new Date().toISOString()
                };

                // Write to the puzzle results list for this player
                appendPuzzleAnswer(userId, roomId, results); 

                if (puzzleType === "enabler") {
                    console.log("In Enabler Puzzle");
                    // Find ID that matches role we need to enable
                    const roleToEnable = enablerMap[currentDay][currentRole]
                    console.log(`Role to enable: ${roleToEnable}`);
                
                    // Get the players, and find the ID of the player to enable
                    const players = roomData["roomPlayers"]
                    console.log(`Room Players: ${players}`)
                    for (const [userId, playerData] of Object.entries(players)) {
                        console.log(`Role: ${playerData["role"]}`);
                        if (playerData["role"] === roleToEnable) {
                            console.log("Found player to update, updating");
                            await updatePlayer(userId, roomId, "enabledValue", selectedIndex)
                        }
                    }
                }   
                else {
                    incrementEnabledCompletions(roomId);
                }
            }
        });
    });
    
    buttonContainer.appendChild(hintButton);
    buttonContainer.appendChild(submitButton);
    puzzleContainer.appendChild(buttonContainer);
    actionsContainer.appendChild(puzzleContainer);
}

export async function appendPuzzleAnswer(userId, roomId, newResult) {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);

    if (roomSnap.exists()) {
        const playerData = roomSnap.data()["players"]?.[userId] || {};
        const existingAnswers = playerData["puzzleAnswers"] || [];

        const updatedAnswers = [...existingAnswers, newResult];

        await updateDoc(roomRef, {
            [`players.${userId}.puzzleAnswers`]: updatedAnswers
        });
    }
}

export async function navigateToRoom(roomName) {
    const playerId = localStorage.getItem("connectedUserId");
    const roomId = localStorage.getItem("connectedRoomId");
    
    // Show loading 
    document.getElementById("loadingContainer").style.display = "flex";

    // Update current room in Firebase
    await updatePlayer(playerId, roomId, "currentRoom", roomName);
    
    // Store the room name for objective setting
    localStorage.setItem("currentRoomName", roomName);
    
    // Navigate to the room
    window.location.href = `${roomName.toLowerCase().replace(' ', '-')}.html`;
}



