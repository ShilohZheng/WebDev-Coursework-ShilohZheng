document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#4CAF50';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#333';
        });
    });

    // Add click effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const eventTitle = this.querySelector('h3').textContent;
            alert(`You clicked on: ${eventTitle}`);
        });
    });

    // Current year for footer
    const yearElement = document.querySelector('.footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} Neighborhood Connect`;
    }
});
