
function imageSlider(anything) {
document.querySelector('.starbucks').src =anything;
}

function chnageCircleColor(color){
const circle = document.querySelector('.circle');
circle.style.background = color;
const title = document.getElementById("title");
title.style.color = color;
}