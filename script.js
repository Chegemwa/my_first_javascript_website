function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const nameInput = document.getElementById("name-input");

    // Get the user's name from the input field
    const userName = nameInput.value.trim();

    // Check if the name input is empty or not
    if (userName === "") {
        welcomeText.innerText = "Welcome to JavaScript!";
    } else {
        welcomeText.innerText = `Welcome to JavaScript, ${userName}!`;
    }

    // Add a pulsating animation to the welcome text
    welcomeText.classList.add("pulse-animation");

    // Change button color randomly
    const button = document.getElementById("change-text-btn");
    button.style.backgroundColor = getRandomColor();
}

// Function to generate a random color for the button
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");

        themeToggleButton.textContent = body.classList.contains("dark-theme")
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";
    });

    // Add particle effect to all buttons
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", (event) => {
            createParticles(event);
        });
    });

    // Floating background circles
    const backgroundContainer = document.querySelector(".background-container");
    function createFloatingCircle() {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        // Random size, position, and animation duration
        const size = Math.random() * 20 + 10;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * 100}vw`;
        circle.style.top = `${Math.random() * 100}vh`;

        // Random animation duration for each circle
        const duration = Math.random() * 5 + 5;
        circle.style.animationDuration = `${duration}s`;

        backgroundContainer.appendChild(circle);

        // Remove the circle after animation ends
        circle.addEventListener("animationend", () => {
            circle.remove();
        });
    }

    // Create floating circles at intervals
    setInterval(createFloatingCircle, 500);
});

// Function to generate the particle explosion effect
function createParticles(event) {
    const button = event.target;
    const particlesContainer = document.createElement("div");
    particlesContainer.classList.add("particles-container");
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particlesContainer.appendChild(particle);

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 80 + 20;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.animationDuration = `${Math.random() * 1 + 1.5}s`;
        particle.style.backgroundColor = getRandomColor();
    }

    const rect = button.getBoundingClientRect();
    particlesContainer.style.left = `${rect.left + rect.width / 2}px`;
    particlesContainer.style.top = `${rect.top + rect.height / 2}px`;

    // Remove particles after animation ends
    setTimeout(() => {
        particlesContainer.remove();
    }, 1500);
}


document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Anywhere is walking distance, if you've got the time. - Steven Wright",
        "Simplicity is the soul of efficiency. - Austin Freeman",
        "JavaScript is the duct tape of the Internet. - Charlie Campbell",
        "Code is like humor. When you have to explain it, it’s bad. - Cory House",
        "Rest is for the weary, sleep is for the dead.",
        "The two most abundant things in the universe are Hydrogen and stupidity. - Harlan Ellison",
    ];

    const quoteDisplay = document.getElementById("quote-display");
    const getQuoteButton = document.getElementById("get-quote");

    // Function to display a random quote
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    }

    // Display a quote on page load
    displayRandomQuote();

    // Display a new quote when the button is clicked
    getQuoteButton.addEventListener("click", displayRandomQuote);
});
