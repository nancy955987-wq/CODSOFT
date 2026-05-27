// Smooth reveal animation for sections
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.25;

        if (sectionTop < screenPosition) {
            section.classList.add("show");
        }
    });
}

revealSections();
window.addEventListener("scroll", revealSections);

// Navbar shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

console.log("MindLock Landing Page Loaded");