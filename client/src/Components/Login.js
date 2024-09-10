// login.js

// Attach an event listener to the form's 'submit' event
// This listener will trigger when the form is submitted
document.querySelector('form').addEventListener('submit', function (event) {

    // Prevent the form's default submission behavior (page reload)
    // This allows us to handle the form submission through JavaScript
    event.preventDefault();

    // Get the values entered in the username and password fields
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Validate if both username and password fields are filled
    if (username && password) {
        
        // If both fields are filled, simulate a successful login
        // In a real-world application, this data would be sent to the server for authentication
        alert('Login successful!');
        
        // Clear the input fields after a successful login
        clearFields();
    } else {
        // If either field is empty, display an error message
        alert('Invalid username or password');
    }
});

// Function to clear input fields after login
function clearFields() {
    // Reset the username and password fields to empty strings
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}
