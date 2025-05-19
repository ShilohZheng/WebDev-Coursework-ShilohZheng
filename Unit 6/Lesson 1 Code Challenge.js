// Basic interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            alert("Welcome to Sara's authentic Trinidadian kitchen!");
        });
    }

    // Add hover effect to headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', function() {
            this.style.textDecoration = 'underline';
        });
        heading.addEventListener('mouseout', function() {
            this.style.textDecoration = 'none';
        });
    });

    // External link confirmation
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!confirm('You are leaving Sara\'s Kitchen. Continue?')) {
                e.preventDefault();
            }
        });
    });
});
