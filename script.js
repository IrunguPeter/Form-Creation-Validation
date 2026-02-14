// 1. Setup and Initial Code Structure
document.addEventListener('DOMContentLoaded', function() {
    // Form Selection
    const form = document.getElementById('registration-form');
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission and Event Prevention
    form.addEventListener('submit', function(event) {
        // Prevent form from submitting to the server
        event.preventDefault();

        // 3. Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 4. Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // 5. Validation Logic
        // Username Validation: Check if length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: Check for '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must contain both '@' and '.' characters.");
        }

        // Password Validation: Check if length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 6. Displaying Feedback
        // Make the feedback div visible
        feedbackDiv.style.display = "block";

        if (isValid) {
            // Success Message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green
        } else {
            // Error Messages: Join array items with <br> tags
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red
        }
    });
});