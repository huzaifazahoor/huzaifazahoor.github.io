document.addEventListener('DOMContentLoaded', function () {

    /* ---- Dynamic years of experience ---- */
    const expYearsEl = document.getElementById('exp-years');
    if (expYearsEl) {
        const start = new Date('2020-09-01');
        const now = new Date();
        const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
        expYearsEl.textContent = years.toFixed(1);
    }

    /* ---- Year ---- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---- Graph paper canvas background ---- */
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
            drawGrid();
        }

        function drawGrid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const step = 40;

            // Minor grid lines
            ctx.strokeStyle = '#d6cfc4';
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = 0.45;
            for (let x = 0; x <= canvas.width; x += step) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y <= canvas.height; y += step) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Major grid lines every 5 steps
            ctx.strokeStyle = '#c4bbb0';
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = 0.35;
            for (let x = 0; x <= canvas.width; x += step * 5) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y <= canvas.height; y += step * 5) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            ctx.globalAlpha = 1;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        // Redraw canvas on content change (for portfolio load)
        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(document.body);
    }

    /* ---- Mobile nav ---- */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            const isOpen = mobileMenu.classList.contains('open');
            mobileMenu.classList.toggle('open', !isOpen);
            hamburger.setAttribute('aria-expanded', String(!isOpen));
            mobileMenu.setAttribute('aria-hidden', String(isOpen));
        });

        // Close on mobile link click
        mobileMenu.querySelectorAll('.mobile-link').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            });
        });
    }

    /* ---- Active nav link on scroll ---- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
        let current = '';
        sections.forEach(function (section) {
            const top = section.getBoundingClientRect().top;
            if (top <= 100) current = section.id;
        });
        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---- Fade-up scroll animations ---- */
    const fadeEls = document.querySelectorAll('.fade-up');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        fadeEls.forEach(function (el) { io.observe(el); });
    } else {
        fadeEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---- Contact form (collect only, no send yet) ---- */
    const form = document.getElementById('contact-form');
    const note = document.getElementById('form-note');
    const submitBtn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const budget = form.querySelector('#budget').value;
            const description = form.querySelector('#description').value.trim();

            note.classList.remove('error');

            if (!name || !email || !budget || !description) {
                note.textContent = 'Please fill in all required fields.';
                note.classList.add('error');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                note.textContent = 'Please enter a valid email address.';
                note.classList.add('error');
                return;
            }

            // Collect form data (email sending will be wired up later via SMTP)
            const data = {
                name: name,
                email: email,
                budget: budget,
                description: description,
                heard: form.querySelector('#heard').value || 'not specified',
                submitted_at: new Date().toISOString()
            };

            console.log('Form submission (SMTP not wired yet):', data);

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sent!';
            note.textContent = 'Thanks! I will get back to you within 24 hours.';
            form.reset();

            setTimeout(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 4000);
        });
    }

    /* ---- Active nav link style ---- */
    const style = document.createElement('style');
    style.textContent = '.nav-link.active { color: var(--navy); background: var(--edge-light); }';
    document.head.appendChild(style);

});