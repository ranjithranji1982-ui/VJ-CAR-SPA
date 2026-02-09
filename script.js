function openImage(src){
  document.getElementById("imageViewer").style.display = "flex";
  document.getElementById("fullImage").src = src;
}

function closeImage(){
  document.getElementById("imageViewer").style.display = "none";
}
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
