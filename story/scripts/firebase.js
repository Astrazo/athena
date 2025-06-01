const firebaseConfig = {
    apiKey: "AIzaSyDzgDI28nu9RGm32mJH-1tvkZCQOdEjdrk",
    authDomain: "athena-astrazo.firebaseapp.com",
    projectId: "athena-astrazo",
    storageBucket: "athena-astrazo.firebasestorage.app",
    messagingSenderId: "879430407218",
    appId: "1:879430407218:web:6c514226b384a7857b182b"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

// Create a new room
window.createRoom = async function(name) {
    const docRef = await db.collection("rooms").add({
        name: name,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        status: "waiting",
        players: []
    });

    console.log("Room created with ID", docRef.id);
    return docRef.id;
};

// Add nickname to the users collection
window.createUser = async function (userName, roomName, roomId) {
    const docRef = await db.collection("users").add({
        userName: userName,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        roomName: roomName,
        roomId: roomId
    })

    console.log("User created with ID", docRef.id);
    return docRef.id;
}

window.addUserToRoom = async function (userId, userName, roomId) {
    const roomRef = db.collection("rooms").doc(roomId)
    const playerEntry = {
        id: userId,
        name: userName
    }
    await roomRef.update({
        players: firebase.firestore.FieldValue.arrayUnion(playerEntry)
    });
    console.log("Added player", userName, "to", roomRef.roomName, ".")
}

// Load all current rooms by status
window.loadRooms = async function (status, roomId) {
    try {
        if (roomId) {
            const snapshot = await db.collection("rooms")
                .where("__name__", "==", roomId)
                .get();

            const doc = snapshot.docs[0];
            if (!doc) return null; // room not found

            return {
                roomName: doc.data().name,
                roomPlayers: doc.data().players
            };
        }
        else if (status) {
            const snapshot = await db.collection("rooms")
                .where("status", "==", status)
                .orderBy("created", "desc")
                .get();

            const rooms = [];
            snapshot.forEach(doc => {
                rooms.push({
                    id: doc.id,
                    name: doc.data().name,
                    players: doc.data().players
                });
            });
            return rooms;
        }

        return [];

    } catch (err) {
        console.error("Error loading rooms:", err);
        return [];
    }
};






