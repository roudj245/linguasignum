// ===== SIDEBAR TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const sidebarLinks = document.querySelectorAll('.sidebar .nav-links a');
const logo = document.querySelector('.logo');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
    logo.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

sidebarLinks.forEach(link => {
    link.addEventListener('click', toggleSidebar);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        toggleSidebar();
    }
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        }
    });
};

// Initial check on page load
window.addEventListener('load', revealOnScroll);

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
    
    lastScroll = currentScroll;
});