document.addEventListener('DOMContentLoaded', function () {

    emailjs.init('NGO1nqOu9meK1DVOi');

    const form = document.getElementById('contact-form');
    const note = document.getElementById('form-note');
    const submitBtn = document.getElementById('submit-btn');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const budget = document.getElementById('budget').value;
        const description = form.querySelector('#description').value.trim();
        const heard = form.querySelector('#heard').value || 'not specified';

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

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        emailjs.send('service_lwwwte8', 'template_ew9xmho', {
            name: name,
            email: email,
            budget: budget,
            description: description,
            heard: heard
        }).then(function () {
            note.textContent = 'Thanks! I will get back to you within 24 hours.';
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }).catch(function (err) {
            console.error('EmailJS error:', err);
            note.textContent = 'Something went wrong. Please email me directly at huzaifazahoor654@gmail.com.';
            note.classList.add('error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
    });

});