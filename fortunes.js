document.addEventListener("DOMContentLoaded", function() {
    const fortunes = [
        // Add your collection of math fortunes here as strings
        "Classification of mathematical problems as linear and nonlinear is like classification of the Universe as bananas and non-bananas.",
        "A statistician is someone who is good with numbers but lacks the personality to be an accountant.",
        // Add as many as you have
    ];

    function getRandomFortune() {
        return fortunes[Math.floor(Math.random() * fortunes.length)];
    }

    document.getElementById('fortune-display').innerText = getRandomFortune();
});
