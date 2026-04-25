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
    const mobileBtn = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu');
    
    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => mobileMenu.classList.remove('translate-x-full'));
        closeBtn.addEventListener('click', () => mobileMenu.classList.add('translate-x-full'));
    }

    // GSAP Revelations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // 1. Staggered reveal for grid items
        const grids = document.querySelectorAll('.grid-reveal');
        grids.forEach(grid => {
            gsap.from(grid.children, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: { trigger: grid, start: "top 80%" }
            });
        });

        // 2. Parallax effect for hero images
        const parallaxImgs = document.querySelectorAll('.parallax-img');
        parallaxImgs.forEach(img => {
            gsap.to(img, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // 3. Horizontal Marquee
        const marqueeInner = document.querySelector('.marquee-inner');
        if (marqueeInner) {
            gsap.to(marqueeInner, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "none"
            });
        }

        // 4. Reveal text split
        const revealUps = document.querySelectorAll('.reveal-up');
        revealUps.forEach(el => {
            gsap.fromTo(el, { opacity: 0, y: 30 }, { 
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 85%" }
            });
        });
    }
});
