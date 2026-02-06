document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        console.log('Form submitted with data:', formData);

        contactForm.reset();

        showMessage('Thank you for your message! This is a simulated submission. In production, your message would be sent to our team and we would respond within 24-48 hours.', 'success');

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 8000);
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
