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

const form = document.getElementById("newsletter-form");

  function showPopup(title, message, success = true) {
    const modal = document.getElementById("popup-modal");
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-message").textContent = message;

    // Change color for success/error
    document.getElementById("popup-title").className = success
      ? "text-lg font-bold mb-2 text-green-600"
      : "text-lg font-bold mb-2 text-red-600";

    modal.classList.remove("hidden");

    // Auto hide after 4 seconds
    setTimeout(() => modal.classList.add("hidden"), 2000);
  }

  function closePopup() {
    document.getElementById("popup-modal").classList.add("hidden");
  }
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("EMAIL").value.trim();

  // Show popup immediately
  showPopup("✅ Subscribed!", "Thank you! You have successfully subscribed.");
  form.reset();

  // Submit to Brevo in the background
  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
    mode: "no-cors"
  }).catch(err => {
    // We ignore errors here because popup is already shown
    console.warn("Brevo submission failed (ignored)", err);
  });
});
