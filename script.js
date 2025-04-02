// Get the button and counter elements
const increaseButton = document.getElementById("increase-btn");
const begsCount = document.getElementById("begs-count");

// Initialize the BEGS counter variable
let begs = 0;

// Add an event listener to the button
increaseButton.addEventListener("click", function() {
    begs++; // Increment the BEGS counter
    begsCount.textContent = "BEGS: " + begs; // Update the counter on the page
});
