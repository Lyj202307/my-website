// main.js - Shared interaction logic
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('glass', 'py-4');
            nav.classList.remove('py-6');
        } else {
            nav.classList.remove('glass', 'py-4');
            nav.classList.add('py-6');
        }
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => mobileMenu.classList.remove('translate-x-full'));
        closeBtn.addEventListener('click', () => mobileMenu.classList.add('translate-x-full'));
    }

    // GSAP Revelations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        const revealUps = document.querySelectorAll('.reveal-up');
        revealUps.forEach(el => {
            gsap.fromTo(el, { opacity: 0, y: 50 }, { 
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 85%" }
            });
        });
    }
});
