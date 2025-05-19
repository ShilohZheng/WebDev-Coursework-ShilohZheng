// JavaScript for interactive functionality
// Example: Add click event to the image
document.querySelector('.profile-img').addEventListener('click', function() {
    alert("Welcome to Sara's Kitchen! Click OK to view recipes.");
});

// Example: Change heading color on hover
document.querySelector('h1').addEventListener('mouseover', function() {
    this.style.color = '#cc0000';
});
document.querySelector('h1').addEventListener('mouseout', function() {
    this.style.color = 'red';
});
