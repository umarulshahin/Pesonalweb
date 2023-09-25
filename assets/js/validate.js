
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate the form
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const errorMessages = [];

    // Validate name
    if (name === "") {
        errorMessages.push("Name is required");
    }

    // Validate email
    if (email === "") {
        errorMessages.push("Email is required");
    } else if (!isValidEmail(email)) {
        errorMessages.push("Invalid email format");
    }

    // Validate subject
    if (subject === "") {
        errorMessages.push("Subject is required");
    }

    // Validate message
    if (message === "") {
        errorMessages.push("Message is required");
    }

    // Display error messages or submit the form
    const errorDisplay = document.querySelector(".error-message");
    if (errorMessages.length > 0) {
        errorDisplay.innerHTML = errorMessages.join("<br>");
        return false; // Prevent form submission
    } else {
        errorDisplay.innerHTML = ""; // Clear any previous error messages
        return true; // Allow form submission
    }
}

// Attach form validation function to form submission
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
