
const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");

function toggle(){
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}


