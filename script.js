// Current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.about-section, .portfolio-section, .contact-section');
    
    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}