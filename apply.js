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
        
        "Apply Now",
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
// JavaScript to create a typewriter-like effect on the paragraph element
const text = " Apply now and be part of our success story.";
let charIndex = 0;
const typing = () => {
    const typingText = document.getElementById('typing-effect');
    if (charIndex < text.length) {
        typingText.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typing, 70);
    }
}
window.onload = typing;

