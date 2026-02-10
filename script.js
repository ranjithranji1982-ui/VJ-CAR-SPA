let popupOpen = false;

function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = src;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";

    popupOpen = true;

    // Add one history state
    history.pushState({ popup: true }, "");
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");

    lightbox.style.display = "none";
    document.body.style.overflow = "auto";

    popupOpen = false;
}

// Back button logic
window.addEventListener("popstate", function (event) {
    if (popupOpen) {
        closeLightbox();
    }
});
