// Function to handle the CTA headline update
document.addEventListener("DOMContentLoaded", () => {
    // Select the necessary DOM elements
    const headline = document.getElementById("cta-headline");
    const inputField = document.getElementById("headline-input");
    const updateButton = document.getElementById("update-btn");

    // Add event listener to the button
    updateButton.addEventListener("click", () => {
        const newText = inputField.value.trim();

        // Check if the input is not empty before updating
        if (newText !== "") {
            headline.textContent = newText;
            inputField.value = ""; // Clear input after update
        } else {
            alert("Please enter some text to update the headline.");
        }
    });
});
