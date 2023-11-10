function sendMessage() {
    // Validate the form fields (you can add more validation as needed)
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Assuming form validation passes, show the confirmation message
    document.getElementById('confirmation-message').style.display = 'block';

    // You can also submit the form data to the server using AJAX if needed
}
