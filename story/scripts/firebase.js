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

// Load all current rooms by status
window.loadRooms = async function (status) {
    const rooms = [];
    try {
        const snapshot = await db.collection("rooms")
        .where("status", "==", status)
        .orderBy("created", "desc")
        .get();
        snapshot.forEach(doc => {
            rooms.push({
                id: doc.id,
                name: doc.data().name
            })
        })
        return rooms
    } catch (err) {
        console.error("Error loading rooms:", err);
        return [];
    }
}



