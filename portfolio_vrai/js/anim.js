// ========================================
// ANIMATIONS PORTFOLIO - VERSION ÉLÉGANTE
// ========================================

// ========================================
// 1. APPARITION DOUCE AU SCROLL
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Cartes de langues
    document.querySelectorAll('.langue-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(card);
    });

    // Timeline
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
        observer.observe(item);
    });

    // Hero content
    const heroContent = document.querySelector('.hero .content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => heroContent.classList.add('visible'), 100);
    }

    // Portrait
    const portrait = document.querySelector('.portrait:not(.portrait_clair)');
    const portraitClair = document.querySelector('.portrait_clair');
    [portrait, portraitClair].forEach(p => {
        if (p) {
            p.style.opacity = '0';
            p.style.transform = 'scale(0.9)';
            p.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s';
            setTimeout(() => p.classList.add('visible'), 100);
        }
    });
}

// Style pour les éléments visibles
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) translateX(0) scale(1) !important;
    }
`;
document.head.appendChild(style);

// ========================================
// 2. EFFET SMOOTH SUR LES CARTES
// ========================================
function enhanceCards() {
    document.querySelectorAll('.langue-card, .timeline-content').forEach(card => {
        // Effet 3D subtil au survol
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            this.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.transition = 'transform 0.3s ease';
        });
    });
}

// ========================================
// 3. PARALLAX LÉGER SUR LE HERO
// ========================================
function smoothParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                const hero = document.querySelector('.hero');
                
                if (hero && scrolled < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ========================================
// 4. BOUTONS AVEC EFFET RIPPLE
// ========================================
function addButtonEffects() {
    document.querySelectorAll('.btn, .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: translate(-50%, -50%);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                width: 400px;
                height: 400px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// ========================================
// 5. NAVIGATION ACTIVE SMOOTH
// ========================================
function smoothNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Si c'est une ancre interne
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Mettre à jour l'état actif
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// ========================================
// 6. THEME SWITCHER ANIMÉ
// ========================================
function animateThemeSwitcher() {
    const switcher = document.getElementById('theme-switcher');
    if (!switcher) return;
    
    switcher.addEventListener('click', function() {
        this.style.transform = 'rotate(180deg) scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'rotate(360deg) scale(1)';
        }, 150);
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
    
    switcher.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
}

// ========================================
// 7. TITRES AVEC EFFET SUBTIL
// ========================================
function animateTitles() {
    const titles = document.querySelectorAll('.apropos h2, .etudes h2');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });
    
    titles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateX(-20px)';
        title.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(title);
    });
}

// ========================================
// 8. IMAGES AVEC HOVER DOUX
// ========================================
function enhanceImages() {
    document.querySelectorAll('.langue-card img').forEach(img => {
        img.parentElement.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1) rotate(5deg)';
            img.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        img.parentElement.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// ========================================
// 9. CURSEUR AMÉLIORÉ (SUBTIL)
// ========================================
function subtleCursor() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: rgba(102, 126, 234, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        mix-blend-mode: difference;
        transition: width 0.3s ease, height 0.3s ease;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        cursor.style.left = (cursorX - 5) + 'px';
        cursor.style.top = (cursorY - 5) + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // Agrandir sur les éléments interactifs
    document.querySelectorAll('a, button, .langue-card, .timeline-content').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
        });
    });
}

// ========================================
// 10. BACKGROUND SUBTIL
// ========================================
function subtleBackground() {
    const bg = document.createElement('div');
    bg.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
        background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
        opacity: 0;
        animation: fadeInBg 2s ease-in forwards;
    `;
    document.body.insertBefore(bg, document.body.firstChild);
    
    const bgStyle = document.createElement('style');
    bgStyle.textContent = `
        @keyframes fadeInBg {
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(bgStyle);
}

// ========================================
// 11. NAVBAR QUI DISPARAÎT AVANT LE FOOTER
// ========================================
function hideNavbarBeforeFooter() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    let ticking = false;
    
    function checkNavbarVisibility() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Distance avant le bas de la page (ajustable)
        const distanceFromBottom = documentHeight - (scrollY + windowHeight);
        
        // Si on est à moins de 100px du bas, on cache la navbar
        if (distanceFromBottom < 100) {
            navLinks.style.transform = 'translateY(150%)';
            navLinks.style.opacity = '0';
            navLinks.style.pointerEvents = 'none';
        } else {
            navLinks.style.transform = 'translateY(0)';
            navLinks.style.opacity = '1';
            navLinks.style.pointerEvents = 'auto';
        }
        
        ticking = false;
    }
    
    // Ajouter la transition
    navLinks.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(checkNavbarVisibility);
            ticking = true;
        }
    }, { passive: true });
    
    // Vérifier au chargement
    checkNavbarVisibility();
}

// ========================================
// INITIALISATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initScrollAnimations();
        enhanceCards();
        smoothParallax();
        addButtonEffects();
        smoothNavigation();
        animateThemeSwitcher();
        animateTitles();
        enhanceImages();
        subtleCursor();
        subtleBackground();
        hideNavbarBeforeFooter();
        
        console.log('✨ Animations élégantes activées');
    }, 100);
});