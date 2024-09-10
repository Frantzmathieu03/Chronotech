// signup.js

// Attach an event listener to the form submission event
// The 'submit' event is triggered when the form is submitted
document.querySelector('form').addEventListener('submit', function (event) {
    
    // Prevent the default form submission behavior (page reload)
    // This allows us to handle the form data via JavaScript
    event.preventDefault();
    
    // Get the value entered in the username and password input fields
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Check if both fields are filled
    if (username && password) {
        
        // If both fields are filled, simulate a successful signup
        // In a real-world scenario, this data would be sent to the server for validation and storage
        alert('Sign up successful! You can now log in.');
        
        // Clear the form fields after successful signup
        clearFields();
    } else {
        // If either field is empty, show an alert asking the user to fill both fields
        alert('Please fill out both fields');
    }
});

// Function to clear the input fields after successful signup
function clearFields() {
    // Reset the value of the username and password fields to empty strings
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';
}
