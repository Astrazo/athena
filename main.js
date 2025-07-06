import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, doc, addDoc, updateDoc,
    query, where, orderBy, getDocs, arrayUnion, arrayRemove, getDoc, onSnapshot, deleteDoc, deleteField,
    increment
} from "firebase/firestore";
import { roomActions } from "/room-actions.js"
import TypewriterDialogue from "./typewriter.js";

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

export function generateActions(currentDay, roomName, currentRole, actionsContainer) {
    // Get the available actions
    const availableActions = roomActions[currentDay][currentRole][roomName];
    
    // Clear existing buttons
    actionsContainer.innerHTML = "";

    // Loop through each key in the action dictionary
    for (const [actionKey, actionText] of Object.entries(availableActions)) {

        // Generate all by CORRECT_ACTION
        if (actionKey != "CORRECT_ACTION") {
            const button = document.createElement("button");
            button.id = actionKey.replace(/\s+/g, "").toLowerCase() + "Btn";
            button.className = "std-button role-button";
            button.style.width = "250px";
            button.textContent = actionKey;
    
            // Handle action click
            button.onclick = () => {
                // Show room-action dialogue for this button
                typewriter.showSequence(
                    availableActions[actionKey]
                );

                // If this button is the correct action to take, show the puzzle
                if (actionKey === availableActions["CORRECT_ACTION"]) {
                    console.log("Correct action clicked");
                    // Hide actions
                    // Show puzzle
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

export function generatePuzzle(puzzleDiv, ) {
    
}



