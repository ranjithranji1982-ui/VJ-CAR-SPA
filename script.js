function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = src;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Add history entry
    history.pushState({ lightboxOpen: true }, "");
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");

    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}

// Back button handling
window.addEventListener("popstate", function (event) {
    const lightbox = document.getElementById("lightbox");

    if (lightbox.style.display === "flex") {
        // Just close popup, don't go to homepage
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";

        // Prevent further back navigation
        history.pushState(null, "");
    }
});
