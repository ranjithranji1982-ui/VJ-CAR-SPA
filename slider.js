let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if(index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index){
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

// Auto slide
setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}, 4000);
