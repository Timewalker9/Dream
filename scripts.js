document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        form.reset(); // Optional: Reset form fields after submission
    });
});
