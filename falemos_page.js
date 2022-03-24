var firebaseConfig = {
  apiKey: "AIzaSyDddkI29HTgNpjsJvIkwH6Bc2L1hYpQiQ4",
  authDomain: "kwitter-d7833.firebaseapp.com",
  databaseURL: "https://kwitter-d7833-default-rtdb.firebaseio.com/",
  projectId: "kwitter-d7833",
  storageBucket: "kwitter-d7833.appspot.com",
  messagingSenderId: "1025027974355",
  appId: "1:1025027974355:web:d9d8807b639c13ef8d6026",
  measurementId: "G-8K4MC2GZ28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ex=localStorage.getItem("Name_of_the_user");
why=localStorage.getItem("roomname");

function Mystery(){
anothersomething=document.getElementById("something").value;
firebase.database().ref(why).push({
  keyname:ex,
  message:anothersomething,
  like:0
});
document.getElementById("something").value="";
}
function getData() { firebase.database().ref("/"+why).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
somethingtype3=childKey;
somethingtype4=childData;
console.log(somethingtype3);
console.log(somethingtype4);
a=somethingtype4['keyname'];
b=somethingtype4['message'];
c=somethingtype4['like'];
d="<h4>"+a+"<img class='user_tick' src='tick.png'></h4>";
e="<h4 class='message_h4'>"+b+"</h4>";
f="<button class='btn btn-warning' id="+somethingtype3+" value="+c+" onclick='u(this.id)'>";
g="<span class='glyphicon glyphicon-thumbs-up'>like:"+c+"</span></button><hr>";
row=d+e+f+g;
document.getElementById("output").innerHTML+=row;
} }); }); }
getData();
function u(stock){
console.log(stock);
s=stock;
x=document.getElementById(s).value;
y=Number(x)+1;
console.log(y);
firebase.database().ref(why).child(stock).update({like:y});
}
function leave1(){
localStorage.removeItem("roomname");
localStorage.removeItem("Name_of_the_user");
window.location="index.html";
}
  