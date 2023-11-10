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
function sendMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Display the confirmation message
    document.getElementById('confirmation-message').style.display = 'block';

    // Reset the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Send SMS using an SMS Gateway API
    sendSMSToAdmin(name, email, message);
}

function sendSMSToAdmin(name, email, message) {
    // Replace with actual API key, secret, and phone number from your SMS gateway provider
    var apiKey = 'your-api-key';
    var apiSecret = 'your-api-secret';
    var adminPhoneNumber = '0791028187';

    // Construct the message to be sent
    var smsMessage = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Make an API request to send the SMS
    // This example assumes you are using Twilio; replace this with the appropriate API call for your chosen provider
    fetch(`https://api.twilio.com/2010-04-01/Accounts/${apiKey}/Messages.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${apiKey}:${apiSecret}`),
        },
        body: new URLSearchParams({
            To: adminPhoneNumber,
            From: 'your-twilio-phone-number',
            Body: smsMessage,
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error sending SMS:', error));
}
