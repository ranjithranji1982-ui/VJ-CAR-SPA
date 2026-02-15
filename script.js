let popupOpen = false;
let videoPopupOpen = false;


/* ================= IMAGE LIGHTBOX ================= */

function openLightbox(src) {

    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = src;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";

    popupOpen = true;

    // Add history state
    history.pushState({ popup: "image" }, "");
}

function closeLightbox() {

    const lightbox = document.getElementById("lightbox");

    lightbox.style.display = "none";
    document.body.style.overflow = "auto";

    popupOpen = false;
}


/* ================= VIDEO LIGHTBOX ================= */

function openVideo(src) {

    const videoLightbox = document.getElementById("video-lightbox");
    const video = document.getElementById("lightbox-video");

    video.src = src;
    videoLightbox.style.display = "flex";
    document.body.style.overflow = "hidden";

    video.play();

    videoPopupOpen = true;

    // Add history state
    history.pushState({ popup: "video" }, "");
}

function closeVideo() {

    const videoLightbox = document.getElementById("video-lightbox");
    const video = document.getElementById("lightbox-video");

    video.pause();
    video.src = "";

    videoLightbox.style.display = "none";
    document.body.style.overflow = "auto";

    videoPopupOpen = false;
}


/* ================= BACK BUTTON SUPPORT ================= */

window.addEventListener("popstate", function () {

    if (videoPopupOpen) {

        closeVideo();

    } else if (popupOpen) {

        closeLightbox();

    }

});
