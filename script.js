let popupOpen = false;
let videoPopupOpen = false;


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



/* ================= AUTO LOAD IMAGES ================= */

const imageGallery=document.getElementById("image-gallery");

if(imageGallery){

for(let i=1;i<=50;i++){

const img=document.createElement("img");

img.src="gallery/image"+i+".png";

img.onclick=function(){

openLightbox(this.src);

};

img.onerror=function(){

this.remove();

};

imageGallery.appendChild(img);

}

}



/* ================= AUTO LOAD VIDEOS ================= */

const videoGallery=document.getElementById("video-gallery");

if(videoGallery){

const videoNames=["fullwash","teflon","auto","enginebay"];

videoNames.forEach(function(name){

const video=document.createElement("video");

video.onclick=function(){

openVideo("videos/"+name+".mp4");

};

const source=document.createElement("source");

source.src="videos/"+name+".mp4";

source.type="video/mp4";

video.appendChild(source);

videoGallery.appendChild(video);

});

}
