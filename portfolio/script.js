// Show sections on page load
const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionTop < screenPosition) {

            section.classList.add("show");

        }

    });

}

// Run on page load
revealSections();

// Run while scrolling
window.addEventListener("scroll", revealSections);

console.log("Welcome to Nancy Nishad Portfolio Website");// Typing Animation

const typingText = document.querySelector(".typing");

const words = [
    "Web Developer",
    "UI Designer",
    "Flutter Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {

    if(charIndex < words[wordIndex].length){

        typingText.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }
    else{

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }
    else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

typeEffect();