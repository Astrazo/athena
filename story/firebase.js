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

window.createRoom = async function(name) {
  const db = firebase.firestore();  
  const docRef = await db.collection("rooms").add({
    name: name,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    status: "waiting",
    players: []
  });

  console.log("Room created with ID", docRef.id);
  return docRef.id;
};



