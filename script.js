/*Copyright 2025 Marker2K24 on Github. All rights reserved*/

// --- Mobile Navigation Menu ---
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burgerMenu.classList.toggle('toggle');
});

// --- Scroll-Reveal Animations with Intersection Observer ---
const scrollRevealOptions = {
    root: null, // The viewport
    rootMargin: '0px',
    threshold: 0.4 // 10% of the element must be visible
};

const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, scrollRevealOptions);

document.querySelectorAll('.hero-content, .hero-visual, .features-section, .testimonial-card, .download-section').forEach(element => {
    element.classList.add('scroll-reveal');
    scrollRevealObserver.observe(element);
});

// --- Header Background Change on Scroll ---
//const header = document.querySelector('.app-header');
//window.addEventListener('scroll', () => {
//    if (window.scrollY > 50) {
//        header.style.backgroundColor = 'rgba(28, 28, 30, 0.9)'; // Darken and add transparency
//    } else {
//        header.style.backgroundColor = 'transparent';
//    }
//});

// --- Optional: Add a subtle parallax effect to the hero image ---
const heroVisual = document.querySelector('.hero-visual img');
if (heroVisual) {
    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        heroVisual.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });
}
