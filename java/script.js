// save the localstorage in the save button
//create the save code
//var elements = document.querySelectorAll("a");
//for (var i= 0; i < elements.length; i++) {
//    elements[i].style.color = "red";
//}
var saveBtn = document.getElementById("saveBtn");
var past = document.querySelector("past");
var present = document.querySelector("present")
var future = document.querySelector("future");
var textarea = document.getElementsByClassName("description")

let saveBtn = window.localStorage;
document.getElementById("saveBtn").innerHTML = text.length;

function textClick() {
    description.textContent = saveBtn;
    console.log(saveBtn);
}
description.addEventListner("click", function() {

}


//var saveBtn = JSON.parse(window.localStorage.getItem("button")) || [];