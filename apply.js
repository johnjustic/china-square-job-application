document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const successCheck = document.getElementById("success-check");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Assuming the form submission was successful
        showSuccessCheck();
    });

    function showSuccessCheck() {
        successCheck.style.display = "block";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const headerCaption = document.getElementById("header-caption");

    const captions = [
        
        "Welcome to China Square",
        "Innovation Redefined",
        "Building a Better Future",
        // Add more captions as needed
    ];

    let captionIndex = 0;

    function typeCaption() {
        headerCaption.textContent = captions[captionIndex];
        captionIndex = (captionIndex + 2) % captions.length;
    }

    setInterval(typeCaption, 3000); // Change caption every 3 seconds
});
