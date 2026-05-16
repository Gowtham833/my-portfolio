// ==================== PARTICLES ====================
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: -1000, y: -1000 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() > 0.5 ? 190 : 270;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        const dx = mouse.x - this.x, dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
            this.x -= dx * 0.01;
            this.y -= dy * 0.01;
            this.opacity = Math.min(this.opacity + 0.02, 0.8);
        }
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < 120; i++) particles.push(new Particle());

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ==================== CURSOR GLOW ====================
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.transition = 'opacity 0.8s, transform 0.8s';
        preloader.style.opacity = '0';
        preloader.style.transform = 'scale(1.1)';
        setTimeout(() => {
            preloader.style.display = 'none';
            document.getElementById('main-nav').classList.add('visible');
            animateHero();
        }, 800);
    }, 2200);
});

// ==================== HERO ANIMATION ====================
function animateHero() {
    const els = document.querySelectorAll('#hero .cinematic-reveal');
    els.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('revealed');
        }, i * 200);
    });
    // Animate stat counters
    setTimeout(() => {
        document.querySelectorAll('.stat-number').forEach(el => {
            const target = parseInt(el.dataset.count);
            let current = 0;
            const step = Math.max(1, Math.floor(target / 30));
            const interval = setInterval(() => {
                current += step;
                if (current >= target) { current = target; clearInterval(interval); }
                el.textContent = current;
            }, 50);
        });
    }, 800);
}

// ==================== SCROLL REVEAL ====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.dataset.delay || 0) * 1000;
            setTimeout(() => entry.target.classList.add('revealed'), delay);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section:not(#hero) .cinematic-reveal').forEach(el => observer.observe(el));

// ==================== ACTIVE NAV LINK ====================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 200;
        if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === current) link.classList.add('active');
    });
});

// ==================== MOBILE MENU ====================
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== ACHIEVEMENT IMAGE CINEMATIC LOAD ====================
const achImg = document.getElementById('achievement-img');
if (achImg) {
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.transition = 'none';
                img.style.clipPath = 'inset(0 100% 0 0)';
                img.style.filter = 'brightness(2) saturate(0)';
                img.style.transform = 'scale(1.1)';
                // Cinematic reveal sequence
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        img.style.transition = 'clip-path 1.2s cubic-bezier(0.77,0,0.175,1), filter 1.5s ease-out, transform 1.5s ease-out';
                        img.style.clipPath = 'inset(0 0% 0 0)';
                        img.style.filter = 'brightness(1) saturate(1)';
                        img.style.transform = 'scale(1)';
                    }, 200);
                });
                imgObserver.unobserve(img);
            }
        });
    }, { threshold: 0.3 });
    imgObserver.observe(achImg);
}

// ==================== TILT EFFECT ON CARDS ====================
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-8px) perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) perspective(800px) rotateX(0) rotateY(0)';
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // let modal buttons handle it
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ==================== CONTACT MODAL ====================
const contactModal = document.getElementById('contact-modal');

function openContactModal(e) {
    if (e) e.preventDefault();
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Reset status message & form on open
    const status = document.getElementById('modal-status');
    if (status) { status.textContent = ''; status.className = 'modal-status'; }
    document.getElementById('contact-modal-form').reset();
    // Focus email field after animation
    setTimeout(() => document.getElementById('modal-email').focus(), 350);
}

function closeContactModal(e) {
    // If clicking overlay background (not the box itself), close
    if (e && e.target !== contactModal) return;
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
}

async function sendFormspree(e) {
    e.preventDefault();
    const form   = document.getElementById('contact-modal-form');
    const btn    = document.getElementById('modal-submit-btn');
    const status = document.getElementById('modal-status');

    // Loading state
    btn.disabled = true;
    btn.innerHTML = '<span class="modal-spinner"></span> Sending...';
    status.textContent = '';
    status.className = 'modal-status';

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // Success
            status.textContent = '✅ Message sent! I\'ll get back to you soon.';
            status.className = 'modal-status success';
            form.reset();
            btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
            btn.disabled = false;
            // Auto-close after 2.5s
            setTimeout(() => {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            }, 2500);
        } else {
            throw new Error('Server error');
        }
    } catch (err) {
        status.textContent = '❌ Something went wrong. Please try again.';
        status.className = 'modal-status error';
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
        btn.disabled = false;
    }
}

// Close on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
