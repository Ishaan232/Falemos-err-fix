
var firebaseConfig = {
  apiKey: "AIzaSyAvLHX99j62S2jaW7nH7KibI0aNrMx5KiE",
  authDomain: "falemos-3d2a5.firebaseapp.com",
  projectId: "falemos-3d2a5",
  databaseURL:"https://falemos-3d2a5-default-rtdb.firebaseio.com/",
  storageBucket: "falemos-3d2a5.appspot.com",
  messagingSenderId: "1098744431383",
  appId: "1:1098744431383:web:52c03fb237ad553ec02d52",
  measurementId: "G-4M1J9NWZDB"
};
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function danger(){
  userandom= localStorage.getItem("Name_of_the_user");
  document.getElementById("welcome").innerHTML="Welcome "+userandom+" !";
}

function add(){
  rname=document.getElementById("roomname").value;
  firebase.database().ref("/").child(rname).update({
    purpose:"Adding room name"
  });
  localStorage.setItem("roomname",rname);
  window.location="falemos_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
       console.log("roomname"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML+=row;
        });});}
  getData();
  function redirectToRoomName(sad){
  console.log(sad);
  localStorage.setItem("roomname",sad);
  window.location="falemos_page.html";
  }
  function Getout(){
    localStorage.removeItem("roomname");
    localStorage.removeItem("Name_of_the_user");
    window.location="index.html";
  }
  