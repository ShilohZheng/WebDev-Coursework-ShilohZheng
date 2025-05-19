document.addEventListener('DOMContentLoaded', function() {
    // Image hover effect
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        });
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    }

    // Heading animation
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.style.transition = 'color 0.3s ease';
        heading.addEventListener('mouseover', function() {
            this.style.color = '#FF8C00';
        });
        heading.addEventListener('mouseout', function() {
            const colors = {
                'H1': '#CC0000',
                'H2': '#0066CC',
                'H3': '#008000'
            };
            this.style.color = colors[this.tagName];
        });
    });

    // External link confirmation
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!confirm('You are about to leave Sara\'s Kitchen. Continue to ' + this.hostname + '?')) {
                e.preventDefault();
            }
        });
    });
});
