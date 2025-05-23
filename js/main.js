// Navigation mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle navigation
function toggleNav() {
    // Toggle nav
    nav.classList.toggle('nav-active');
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger animation
    burger.classList.toggle('toggle');
}

// Gérer les dropdowns mobiles
function handleDropdowns() {
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                // Fermer tous les autres dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.querySelector('.dropdown-content').classList.remove('active');
                    }
                });
                // Toggle le dropdown courant
                dropdown.querySelector('.dropdown-content').classList.toggle('active');
            }
        });
    });
}

// Initialisation des dropdowns
handleDropdowns();

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    // const navLinks = document.querySelectorAll('.nav-links li');

    /////////////////////////////////////////
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const servicesDropdown = document.querySelector('.services-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');


     // Gestion du menu hamburger
     hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Gestion du menu déroulant des services sur mobile
    if (servicesDropdown) {
        servicesDropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) { // Seulement sur mobile
                e.preventDefault();
                dropdownMenu.classList.toggle('active');
            }
        });

        // Gestion des clics sur les liens du menu déroulant
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                // Si c'est un lien interne (#section)
                if (href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                        // Fermer le menu hamburger et le menu déroulant
                        navLinks.classList.remove('active');
                        dropdownMenu.classList.remove('active');
                    }
                } else {
                    // Pour les liens externes, rediriger vers la page
                    window.location.href = href;
                }
            });
        });

        // Fermer le menu déroulant lorsqu'on clique ailleurs
        document.addEventListener('click', (e) => {
            if (!servicesDropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });





//////////////////////////////






    // Toggle navigation
    function toggleNav() {
        // Toggle nav
        // nav.classList.toggle('active');
        
        // Animate links
        // navLinks.forEach((link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = '';
        //     } else {
        //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        //     }
        // });
        
        // Burger animation
        // burger.classList.toggle('toggle');
    }

    // burger.addEventListener('click', toggleNav);

    // Fermer le menu mobile quand on clique sur un lien
    // navLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         if (window.innerWidth <= 768) {
    //             nav.classList.remove('active');
    //             burger.classList.remove('toggle');
    //         }
    //     });
    // });

    // Fermer le menu mobile quand on clique en dehors
    // document.addEventListener('click', (e) => {
    //     if (!nav.contains(e.target) && !burger.contains(e.target)) {
    //         nav.classList.remove('active');
    //         burger.classList.remove('toggle');
    //     }
    // });
});

// Fermer le dropdown lorsqu'on clique en dehors
// window.addEventListener('click', (e) => {
//     if (window.innerWidth <= 768) {
//         dropdowns.forEach(dropdown => {
//             if (!dropdown.contains(e.target)) {
//                 dropdown.querySelector('.dropdown-content').classList.remove('active');
//             }
//         });
//     }
// });

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Système de suivi des colis (simulation)
const trackingForm = document.querySelector('.tracking-form');
if (trackingForm) {
    trackingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const trackingNumber = this.querySelector('input').value;
        if (trackingNumber.trim() !== '') {
            // Simulation de suivi - à remplacer par une vraie API
            alert(`Suivi du colis ${trackingNumber}:\nStatut: En cours de livraison\nPosition: Yaoundé\nDélai estimé: 24h`);
        } else {
            alert('Veuillez entrer un numéro de suivi valide');
        }
    });
}

// Animation au scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.service-card, .feature');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Ajout de classe active pour le menu courant
function setActiveMenu() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    setActiveMenu();
    revealOnScroll();
});

// Gestion des images
document.addEventListener('DOMContentLoaded', function() {
    // Configuration de l'Intersection Observer pour le lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadImage(img);
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    // Fonction pour charger une image
    function loadImage(img) {
        if (img.dataset.src) {
            img.classList.add('loading');
            const tempImage = new Image();
            
            tempImage.onload = () => {
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
            };

            tempImage.onerror = () => {
                img.classList.remove('loading');
                img.classList.add('error');
                handleImageError(img);
            };

            tempImage.src = img.dataset.src;
        }
    }

    // Gestion des erreurs d'images
    function handleImageError(img) {
        const fallbackText = img.getAttribute('alt') || 'Image non disponible';
        const container = document.createElement('div');
        container.className = 'image-error';
        container.innerHTML = `
            <div class="error-icon">!</div>
            <p>${fallbackText}</p>
        `;
        img.parentNode.replaceChild(container, img);
    }

    // Observer toutes les images avec data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Gestion des images de fond
    function loadBackgroundImages() {
        const elements = document.querySelectorAll('[data-background]');
        elements.forEach(element => {
            const url = element.getAttribute('data-background');
            if (url) {
                const tempImage = new Image();
                tempImage.onload = () => {
                    element.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${url})`;
                    element.classList.add('background-loaded');
                };
                tempImage.src = url;
            }
        });
    }

    // Animation des images au scroll
    function animateImagesOnScroll() {
        const images = document.querySelectorAll('.service-card img, .about-image img, .service-item img');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1
        });

        images.forEach(img => observer.observe(img));
    }

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulation d'envoi du formulaire
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';

            setTimeout(() => {
                alert('Message envoyé avec succès !');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer le message';
                this.reset();
            }, 1500);
        });
    }

    // Gestion du formulaire de suivi
    const trackingForm = document.getElementById('tracking-form');
    if (trackingForm) {
        trackingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const trackingNumber = this.querySelector('input').value;
            const resultDiv = document.getElementById('tracking-result');

            if (trackingNumber.trim() !== '') {
                // Simulation de suivi
                resultDiv.style.display = 'block';
                updateTrackingTimeline(trackingNumber);
            }
        });
    }

    // Mise à jour de la timeline de suivi
    function updateTrackingTimeline(trackingNumber) {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const delay = index * 500;
            setTimeout(() => {
                item.classList.add('active');
                const timeElement = item.querySelector('.time');
                if (timeElement) {
                    timeElement.textContent = new Date().toLocaleDateString();
                }
            }, delay);
        });
    }

    // Initialisation
    loadBackgroundImages();
    animateImagesOnScroll();
});

// Slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Initialize first slide
    slides[currentSlide].classList.add('active');

    // Change slide every 3 seconds
    setInterval(changeSlide, 3000);
});

// Ajout des styles CSS pour les animations
const style = document.createElement('style');
style.textContent = `
    .animate {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .image-error {
        background: #f8f8f8;
        padding: 20px;
        text-align: center;
        border-radius: 8px;
    }

    .error-icon {
        font-size: 24px;
        color: #e74c3c;
        margin-bottom: 10px;
    }

    .background-loaded {
        transition: background-image 0.3s ease-in;
    }
`;
document.head.appendChild(style);

// Gestion des formulaires de réservation
document.addEventListener('DOMContentLoaded', () => {
    // Formulaire de restauration
    const restoForm = document.querySelector('.contact-form');
    if (restoForm) {
        restoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(restoForm);
            const data = Object.fromEntries(formData);
            
            // Afficher un message de confirmation
            const confirmation = document.createElement('div');
            confirmation.className = 'confirmation-message';
            confirmation.innerHTML = `
                <h3>Merci pour votre réservation !</h3>
                <p>Nous vous recontacterons prochainement pour confirmer votre réservation.</p>
            `;
            
            restoForm.parentNode.insertBefore(confirmation, restoForm);
            
            // Réinitialiser le formulaire
            restoForm.reset();
            
            // Supprimer le message après 5 secondes
            setTimeout(() => {
                confirmation.remove();
            }, 5000);
        });
    }

    // Formulaire de tourisme
    const tourismForm = document.querySelector('#contact-tourisme .contact-form');
    if (tourismForm) {
        tourismForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(tourismForm);
            const data = Object.fromEntries(formData);
            
            // Afficher un message de confirmation
            const confirmation = document.createElement('div');
            confirmation.className = 'confirmation-message';
            confirmation.innerHTML = `
                <h3>Merci pour votre réservation !</h3>
                <p>Nous vous recontacterons prochainement pour confirmer votre circuit touristique.</p>
            `;
            
            tourismForm.parentNode.insertBefore(confirmation, tourismForm);
            
            // Réinitialiser le formulaire
            tourismForm.reset();
            
            // Supprimer le message après 5 secondes
            setTimeout(() => {
                confirmation.remove();
            }, 5000);
        });
    }
});

// Ajout des styles CSS pour les messages de confirmation
const styleConfirmation = document.createElement('style');
styleConfirmation.textContent = `
.confirmation-message {
    background: var(--primary-color);
    color: white;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    text-align: center;
}

.confirmation-message h3 {
    margin: 0 0 1rem 0;
    color: white;
}

.confirmation-message p {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
}
`;
document.head.appendChild(styleConfirmation);

// Gestion des flèches de navigation pour le menu
document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menuGrid');
    const navLeft = document.querySelector('.menu-nav-left');
    const navRight = document.querySelector('.menu-nav-right');
    const scrollAmount = 300; // Distance de défilement en pixels

    // Fonction pour dérouler horizontalement
    function scrollHorizontally(direction) {
        const container = menuGrid;
        const currentScroll = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const scrollWidth = container.scrollWidth;
        
        // Calculer la nouvelle position de défilement
        let newScroll = currentScroll;
        if (direction === 'left') {
            newScroll = Math.max(0, currentScroll - scrollAmount);
        } else {
            newScroll = Math.min(scrollWidth - containerWidth, currentScroll + scrollAmount);
        }
        
        // Faire le défilement avec animation
        container.scrollTo({
            left: newScroll,
            behavior: 'smooth'
        });
    }

    // Ajouter les écouteurs d'événements
    navLeft.addEventListener('click', () => scrollHorizontally('left'));
    navRight.addEventListener('click', () => scrollHorizontally('right'));

    // Masquer les flèches quand elles ne sont pas nécessaires
    function updateNavVisibility() {
        const container = menuGrid;
        const currentScroll = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const scrollWidth = container.scrollWidth;

        navLeft.style.display = currentScroll === 0 ? 'none' : 'block';
        navRight.style.display = (scrollWidth - containerWidth - currentScroll) <= 0 ? 'none' : 'block';
    }

    // Mettre à jour la visibilité des flèches au chargement et au défilement
    updateNavVisibility();
    menuGrid.addEventListener('scroll', updateNavVisibility);
});

// Navigation des menus
function setupMenuNavigation() {
    const menuGrid = document.querySelector('.menu-grid');
    const prevButton = document.querySelector('.menu-nav-prev');
    const nextButton = document.querySelector('.menu-nav-next');

    if (!menuGrid || !prevButton || !nextButton) return;

    let isScrolling = false;

    // Désactiver les boutons si nécessaire
    function updateButtonStates() {
        const scrollLeft = menuGrid.scrollLeft;
        const scrollWidth = menuGrid.scrollWidth;
        const clientWidth = menuGrid.clientWidth;

        prevButton.disabled = scrollLeft <= 0;
        nextButton.disabled = scrollLeft >= (scrollWidth - clientWidth);
    }

    // Gestion du défilement
    menuGrid.addEventListener('scroll', () => {
        if (!isScrolling) {
            updateButtonStates();
        }
    });

    // Bouton précédent
    prevButton.addEventListener('click', () => {
        menuGrid.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    // Bouton suivant
    nextButton.addEventListener('click', () => {
        menuGrid.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });

    // Mise à jour initiale des boutons
    updateButtonStates();
}

document.addEventListener('DOMContentLoaded', setupMenuNavigation);