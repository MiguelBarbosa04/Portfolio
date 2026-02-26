// ========== MENU TOGGLE (Mobile) ==========
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar num link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
const navLinksActive = document.querySelectorAll('.nav-menu a');

function activateMenuLink() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinksActive.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateMenuLink);

// ========== SCROLL REVEAL ANIMATION ==========
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// Inicializar na carga
revealOnScroll();

// ========== FORM SUBMIT ==========
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obter valores
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Aqui podes adicionar lógica para enviar o email
        // Por agora, apenas mostra uma mensagem
        alert(`Obrigado ${name}! Entraremos em contacto em breve para o email: ${email}`);
        
        // Limpar formulário
        contactForm.reset();
    });
}

// ========== TYPING EFFECT (Optional) ==========
const typingText = document.querySelector('.typing-text');

if (typingText) {
    const text = typingText.getAttribute('data-text');
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    // Iniciar depois de 1 segundo
    setTimeout(type, 1000);
}

// ========== COPYRIGHT YEAR ==========
const copyrightYear = document.querySelector('.copyright-year');
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

// ========== LAZY LOADING IMAGES ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

console.log('Portfolio loaded successfully! 🚀');
