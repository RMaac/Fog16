document.addEventListener('DOMContentLoaded', () => {
    const opinionForm = document.querySelector('.opinion-form');
    const submissionMessage = document.getElementById('submission-message');

    if (opinionForm) {
        opinionForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Simple client-side simulation of form submission
            console.log('Feedback submitted.');
            
            // 1. Display the success message
            submissionMessage.style.display = 'block';

            // 2. Hide the form elements and button
            const formElements = this.querySelectorAll('input, textarea, button');
            formElements.forEach(element => {
                element.style.display = 'none';
            });

            // In a real application, you would send this data to a server here:
            // fetch('/submit-feedback', { method: 'POST', body: new FormData(this) })
            // .then(response => { ... })
            // .catch(error => { ... });

            // Optional: Reset and restore the form after a delay (e.g., 5 seconds)
            setTimeout(() => {
                submissionMessage.style.display = 'none';
                formElements.forEach(element => {
                    element.style.display = ''; // Restore display
                });
                this.reset(); // Clear the form fields
            }, 5000);
        });
    }

    // Optional: Add simple smooth scrolling for navigation links
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

