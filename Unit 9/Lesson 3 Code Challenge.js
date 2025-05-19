// Function to show welcome message
function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    const welcomeBtn = document.getElementById('welcome-btn');
    
    // Show message
    welcomeMessage.textContent = "Hello World! Welcome to our community!";
    
    // Change button appearance
    welcomeBtn.textContent = "Message Shown!";
    welcomeBtn.style.backgroundColor = "#2196F3";
    welcomeBtn.disabled = true;
    
    // Reset after 3 seconds
    setTimeout(() => {
        welcomeMessage.textContent = "";
        welcomeBtn.textContent = "Click for Welcome Message";
        welcomeBtn.style.backgroundColor = "#4CAF50";
        welcomeBtn.disabled = false;
    }, 3000);
}

// Add event listener to button
document.getElementById('welcome-btn').addEventListener('click', showWelcomeMessage);

// Update copyright year automatically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Card click functionality
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const eventName = this.querySelector('h3').textContent;
        alert(`You clicked on: ${eventName}`);
    });
});
