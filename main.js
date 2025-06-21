import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, doc, addDoc, updateDoc,
    query, where, orderBy, getDocs, arrayUnion, arrayRemove, getDoc, onSnapshot, deleteDoc
} from "firebase/firestore";

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
        players: []
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

export async function addUserToRoom(userId, userName, roomId) {
    const roomRef = doc(db, "rooms", roomId);
    await updateDoc(roomRef, {
        players: arrayUnion({ id: userId, name: userName, role: "None", readyStatus: "0" })
    });
}

export async function removeUserFromRoom(userId, userName, userRole, roomId) {
    const roomRef = doc(db, "rooms", roomId);
    
    // Remove from room
    await updateDoc(roomRef, {
        players: arrayRemove({ id: userId, name: userName, role: userRole, readyStatus: localStorage.getItem("readyStatus") || "0" })
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
        const players = roomSnap.data().players || [];

        // For each player, if the ID is the player that needs to be updated, return the new object
        // Otherwise, just return the player
        const updatedPlayers = players.map(player => {
            if (player["id"] === userId) {
                return { ...player, [key]: value };
            }
            return player;
        });

        await updateDoc(roomRef, { players: updatedPlayers });
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
            callback({ roomId: roomId, roomName: data.name, roomPlayers: data.players });
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
