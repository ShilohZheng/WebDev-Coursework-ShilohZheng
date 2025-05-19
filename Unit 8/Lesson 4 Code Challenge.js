document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year automatically
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }

    // Add click effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardTitle = this.querySelector('h3').textContent;
            alert(`You clicked on: ${cardTitle}`);
        });
    });

    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        link.addEventListener('mouseout', function() {
            this.style.transform = '';
        });
    });
});
