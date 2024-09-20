// Get the radio buttons and the maiden name input field
let maleRadio = document.getElementById("male_radio");
let femaleRadio = document.getElementById("female_radio");
let maidenNameField = document.getElementById("maiden_name");

// Function to toggle the maiden name field visibility
function toggleMaidenNameField() {
    if (femaleRadio.checked) {
        maidenNameField.hidden = false;  // Show the maiden name field
    } else {
        maidenNameField.hidden = true;   // Hide the maiden name field
    }
}

// Add event listeners to the radio buttons to detect when they are clicked
maleRadio.addEventListener("click", toggleMaidenNameField);
femaleRadio.addEventListener("click", toggleMaidenNameField);

// Check the status on page load
window.addEventListener("load", toggleMaidenNameField);
