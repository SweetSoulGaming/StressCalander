var saveBtn = document.getElementsByClassName("button");
var past = document.querySelector("past");
var present = document.querySelector("present");
var future = document.querySelector("future");
var hour = document.getElementById("hour");
var description = document.getElementById("description")
var textarea = document.getElementById("textarea");
var timeblock = document.getElementById("time-block");
console.log(timeblock);
var time = document.getElementById("time");
console.log(time);

function time() {
    var now = moment(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(time);
    $("time").each(function(i, e) {
        var time = moment($(e).attr('datetime'));
    
        if(now.diff(time, 'days') <= 1) {
            $(e).html('<span>' + time.from(now) + '</span>');
        }
    });
}



function setInterval(){
     var past = document.querySelector("past")
     if (condition) {
         
     } else {
         
     }
 }














//saveBtn.onclick = textarea;

