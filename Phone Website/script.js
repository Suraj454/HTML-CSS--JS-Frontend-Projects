let Circle = document.getElementById("circle");
let upButton = document.getElementById("upbtn");
let downButton = document.getElementById("downbtn");

let rotatevalue =Circle.style.transform;
let rotatesum;

upButton.onclick = function(){
    rotatesum = rotatevalue + "rotate(-90deg)";
    Circle.style.transform = rotatesum;
    rotatevalue=rotatesum;
}

downButton.onclick = function(){
    rotatesum = rotatevalue + "rotate(+90deg)";
    Circle.style.transform = rotatesum;
    rotatevalue=rotatesum;
}