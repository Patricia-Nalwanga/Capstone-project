function myFunction() {
    var x = document.getElementById("myNavBar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    }
     else {
      x.className = "nav-bar";
    }
  }
  
  var people= [{
    username:"cynthia",
    password :"12345"
}, {
  username:"pat",
  password :"12345"
},
{
  username:"jenny",
  password :"12345"
}

]

function login(){
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  for(i=0; i< people.length; i++){
      if(username == people[i].username && password == people[i].password){
          console.log(username , "you are logged in")
          window.location = "menu.html";
      }
    
  }
 console.log("Wrong username and Password")
  
}
var signup = new Array();

function register(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
}
  