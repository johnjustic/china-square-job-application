document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const userEmailAddress = document.getElementById("user-email").value;

        // Validate the user's email address
        if (!isValidEmail(userEmailAddress)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Collect form data
        const formData = new FormData(document.getElementById("application-form"));
        formData.append("user-email", userEmailAddress);

        // Send data to the server-side script
        fetch("submit_application.php", {
            method: "POST",
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Application submitted successfully. Thank you!");
                } else {
                    alert("Application submission failed. Please try again later.");
                }
            })
            .catch(error => {
                console.error("Error: " + error);
                alert("An error occurred. Please try again later.");
            });
    });

    function isValidEmail(email) {
        // A basic email validation function
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
