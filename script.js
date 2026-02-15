let popupOpen=false;
let videoPopupOpen=false;


/* IMAGE LIGHTBOX */

function openLightbox(src){

const lightbox=document.getElementById("lightbox");
const img=document.getElementById("lightbox-img");

img.src=src;
lightbox.style.display="flex";

popupOpen=true;

history.pushState({popup:"image"},"");

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

popupOpen=false;

}



/* VIDEO LIGHTBOX */

function openVideo(src){

const lightbox=document.getElementById("video-lightbox");
const video=document.getElementById("lightbox-video");

video.src=src;

lightbox.style.display="flex";

video.play();

videoPopupOpen=true;

history.pushState({popup:"video"},"");

}

function closeVideo(){

const lightbox=document.getElementById("video-lightbox");
const video=document.getElementById("lightbox-video");

video.pause();
video.src="";

lightbox.style.display="none";

videoPopupOpen=false;

}



/* BACK BUTTON */

window.addEventListener("popstate",function(){

if(videoPopupOpen){

closeVideo();

}
else if(popupOpen){

closeLightbox();

}

});



/* AUTO LOAD IMAGES */

fetch("https://api.github.com/repos/ranjithranji1982-ui/VJ-CAR-SPA/contents/gallery")
.then(res=>res.json())
.then(files=>{

const gallery=document.getElementById("image-gallery");

files.forEach(file=>{

if(file.name.match(/\.(jpg|jpeg|png|webp)$/i)){

const img=document.createElement("img");

img.src=file.download_url;

img.onclick=function(){
openLightbox(this.src);
};

gallery.appendChild(img);

}

});

});



/* AUTO LOAD VIDEOS */

fetch("https://api.github.com/repos/ranjithranji1982-ui/VJ-CAR-SPA/contents/videos")
.then(res=>res.json())
.then(files=>{

const gallery=document.getElementById("video-gallery");

files.forEach(file=>{

if(file.name.match(/\.(mp4)$/i)){

const video=document.createElement("video");

video.onclick=function(){
openVideo(file.download_url);
};

const source=document.createElement("source");

source.src=file.download_url;

video.appendChild(source);

gallery.appendChild(video);

}

});

});
