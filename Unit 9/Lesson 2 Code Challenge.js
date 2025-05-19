document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile navigation toggle
    const loginMobile = document.getElementById('login-mobile');
    function checkScreenSize() {
        loginMobile.style.display = window.innerWidth < 768 ? 'inline-flex' : 'none';
    }
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    // Card interactions
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('rsvp-btn') && !e.target.classList.contains('details-btn')) {
                const title = this.querySelector('h3').textContent;
                alert(`Viewing details for: ${title}`);
            }
        });
    });

    // RSVP button functionality
    const rsvpButtons = document.querySelectorAll('.rsvp-btn');
    rsvpButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const eventTitle = this.closest('.card').querySelector('h3').textContent;
            showToast(`You've RSVP'd for ${eventTitle}`);
        });
    });

    // Details button functionality
    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const eventTitle = this.closest('.card').querySelector('h3').textContent;
            alert(`Detailed information about ${eventTitle} will be displayed here.`);
        });
    });

    // Newsletter modal functionality
    const modal = document.getElementById('newsletter-modal');
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const closeModal = document.querySelector('.close-modal');
    
    newsletterBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    document.getElementById('newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        showToast(`Thank you for subscribing with ${email}!`);
        this.reset();
        modal.style.display = 'none';
    });

    // Floating action button - scroll to top
    document.querySelector('.floating-action').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Toast notification function
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
    }

    // Show welcome message on first visit
    if (!localStorage.getItem('visited')) {
        setTimeout(() => {
            showToast('Welcome to Neighborhood Connect!');
            localStorage.setItem('visited', 'true');
        }, 1500);
    }
});
