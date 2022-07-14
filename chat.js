// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyDk_-KzO6vbfhXBBgUrea0CYDlD3RcXqHU",
    authDomain: "lets-chat-15de2.firebaseapp.com",
    databaseURL: "https://lets-chat-15de2-default-rtdb.firebaseio.com",
    projectId: "lets-chat-15de2",
    storageBucket: "lets-chat-15de2.appspot.com",
    messagingSenderId: "669950423814",
    appId: "1:669950423814:web:6d8116ef437432f651a487",
    measurementId: "G-D3F1521V2W"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



