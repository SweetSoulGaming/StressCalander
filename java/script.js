// save the localstorage in the save button
//create the save code
//var elements = document.querySelectorAll("a");
//for (var i= 0; i < elements.length; i++) {
//    elements[i].style.color = "red";
//}
var saveBtn = document.querySelector("btn");
var past = document.querySelector("past");
var present = document.querySelector("present")
//var future = document.querySelector("future");
var hour = document.getElementsByClassName("#description")
var timer = document.querySelector("time");

let saveBtn = window.localStorage.getItem("btn");
saveBtn.textContent = btn;


function textClick(event) {
    ("<button>").textContent = saveBtn;
    console.log(saveBtn);
}
saveBtn.addEventListner("click", function(event) {

}


//var saveBtn = JSON.parse(window.localStorage.getItem("button")) || [];