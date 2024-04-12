// An array of fortunes
const fortunes = [
    "A statistician is someone who is good with numbers but lacks the personality to be an accountant.",
    "If I have to show you how to do this, you're in the wrong class.",
    // ... other quotes
];

// Function to get a random fortune
function getRandomFortune() {
    const index = Math.floor(Math.random() * fortunes.length);
    return fortunes[index];
}

// Function to display a random fortune
function displayFortune() {
    const fortuneContainer = document.getElementById('fortune-container');
    fortuneContainer.textContent = getRandomFortune();
}

// Call displayFortune on page load
window.onload = displayFortune;
