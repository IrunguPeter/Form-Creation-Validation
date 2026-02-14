// 1. Setup and Initial Code Structure
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and the feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission and Event Prevention
    form.addEventListener('submit', (event) => {
        // Prevent the default form submission (stops page refresh)
        event.preventDefault();

        // 3. Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 4. Validation Logic
        let isValid = true;
        const messages = [];

        // Username Validation: Minimum 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: Must contain '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must include '@' and '.').");
        }

        // Password Validation: Minimum 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 5. Displaying Feedback
        feedbackDiv.style.display = "block"; // Make the feedback div visible

        if (isValid) {
            // Success Case
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success Green
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light Green background
            
            // Optional: Clear the form on success
            form.reset();
        } else {
            // Failure Case
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Error Red
            feedbackDiv.style.backgroundColor = "#f8d7da"; // Light Red background
        }
    });
});