var firebaseConfig = {
      apiKey: "AIzaSyDtmgo6utAq6CZjmiCwMZxMg76bcSRferc",
  authDomain: "kwitter-2-a4822.firebaseapp.com",
  databaseURL: "https://kwitter-2-a4822-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-a4822",
  storageBucket: "kwitter-2-a4822.appspot.com",
  messagingSenderId: "220014690515",
  appId: "1:220014690515:web:1effb9d4ca066c77fc5426"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      Room_names = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });

      localStorage.setItem("Room_names",Room_names);

      window.location = "kwitter_room.html"
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user name");
      localStorage.removeItem("Room_names");
      window.location = "index.html";
}
