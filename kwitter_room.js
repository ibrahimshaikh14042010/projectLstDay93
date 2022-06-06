var firebaseConfig = {
    apiKey: "AIzaSyCTB6Ecxsx_F0T6rQfF9Ka8A4GVaW-dYEk",
    authDomain: "kwitter-cdb02.firebaseapp.com",
    databaseURL: "https://kwitter-cdb02-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdb02",
    storageBucket: "kwitter-cdb02.appspot.com",
    messagingSenderId: "844293861358",
    appId: "1:844293861358:web:3d16ab33051fb38cbfe8ff"
  };
  
  // Initialize Firebase
firebase. initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome!!"+user_name;

function addRoom(){
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child (room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redrictToRoomName(this.id)'>#"+Room_names+" </div><hr>";
    });});}
getData();

function redrictToRoomName(name)
{
    console.log(name)
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
