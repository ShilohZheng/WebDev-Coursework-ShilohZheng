document.addEventListener('DOMContentLoaded', function() {
    // Floating button functionality
    const floatingButton = document.querySelector('.floating-button');
    if (floatingButton) {
        floatingButton.addEventListener('click', function() {
            // Scroll to top when clicked
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Card click functionality
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const eventTitle = this.querySelector('h3').textContent;
            alert(`You selected: ${eventTitle}`);
        });
    });

    // Update copyright year automatically
    const copyrightElement = document.querySelector('.footer p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Neighborhood Connect`;
    }
});
