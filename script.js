function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = src;
    lightbox.style.display = "flex";

    document.body.style.overflow = "hidden"; // stop background scroll
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.style.overflow = "auto";
}
