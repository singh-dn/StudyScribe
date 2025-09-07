 document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            
            // --- Mobile Menu Toggle ---
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileNav = document.getElementById('mobile-nav');
            const openIcon = document.getElementById('menu-open-icon');
            const closeIcon = document.getElementById('menu-close-icon');

            mobileMenuBtn.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
                openIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            });

            // --- Header Scroll Effect ---
            const header = document.getElementById('main-header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // --- Scroll Reveal Animation ---
            const revealElements = document.querySelectorAll('.reveal');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });

            revealElements.forEach(elem => {
                revealObserver.observe(elem);
            });

            // --- Notes Carousel Scroll ---
            const scrollBtn = document.getElementById('scroll-btn');
            const notesCarousel = document.getElementById('notes-carousel');
            if(scrollBtn && notesCarousel) {
                scrollBtn.addEventListener('click', () => {
                    notesCarousel.scrollBy({
                        left: 300,
                        behavior: 'smooth'
                    });
                });
            }
        });

         async function loadComponent(id, file) {
      const res = await fetch(file);
      document.getElementById(id).innerHTML = await res.text();
    }
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");