function openImage(src){
  document.getElementById("imageViewer").style.display = "flex";
  document.getElementById("fullImage").src = src;
}

function closeImage(){
  document.getElementById("imageViewer").style.display = "none";
}
