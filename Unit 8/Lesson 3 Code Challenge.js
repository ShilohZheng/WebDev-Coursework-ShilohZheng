document.addEventListener('DOMContentLoaded', function() {
    // Mobile login link visibility
    function toggleMobileLogin() {
        const loginMobile = document.getElementById('login-mobile');
        if (window.innerWidth < 768) {
            loginMobile.style.display = 'inline-flex';
        } else {
            loginMobile.style.display = 'none';
        }
    }

    // Initialize mobile login visibility
    toggleMobileLogin();
    window.addEventListener('resize', toggleMobileLogin);

    // Card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // RSVP button functionality
    const rsvpButtons = document.querySelectorAll('.rsvp-btn');
    rsvpButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventTitle = this.closest('.card').querySelector('h3').textContent;
            alert(`Thank you for RSVPing to ${eventTitle}!`);
        });
    });

    // Floating action button - scroll to top
    const floatingAction = document.querySelector('.floating-action');
    floatingAction.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Update copyright year
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Neighborhood Connect`;
    }
});
