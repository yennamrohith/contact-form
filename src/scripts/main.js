// This file contains JavaScript code to handle form submission and any client-side validation or interactivity.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const subject = form.elements['subject'].value;
        const message = form.elements['message'].value;

        if (validateForm(name, email, subject, message)) {
            // Here you can handle the form submission, e.g., send data to a server
            console.log('Form submitted:', { name, email, subject, message });
            form.reset(); // Reset the form after submission
        }
    });

    function validateForm(name, email, subject, message) {
        if (!name || !email || !subject || !message) {
            alert('All fields are required.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});