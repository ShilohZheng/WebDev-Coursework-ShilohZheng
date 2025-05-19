// Basic interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            alert("Welcome to Sara's Trinidadian Kitchen!");
        });
    }

    // Add hover effect to headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', function() {
            this.style.color = '#FF8C00';
        });
        heading.addEventListener('mouseout', function() {
            const defaultColors = {
                'H1': '#CC0000',
                'H2': '#0066CC',
                'H3': '#008000'
            };
            this.style.color = defaultColors[this.tagName];
        });
    });

    // External link confirmation
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!confirm('You are about to leave Sara\'s Kitchen. Continue to external site?')) {
                e.preventDefault();
            }
        });
    });
});
