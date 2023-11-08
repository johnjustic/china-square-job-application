<?php
echo '<script src="index.js"></script>'
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient_email = "johnjustice766@gmail.com"; // Replace with your email address

    $name = $_POST["name"];
    $email = $_POST["email"];
    $position = $_POST["position"];
    $resume = $_FILES["resume"]["name"];
    $education = $_POST["education"];
    $work_experience = $_POST["work_experience"];
    $achievements = $_POST["achievements"];
    $cover_letter = $_POST["cover_letter"];

    $subject = "New Job Application for $position from $name";
    $message = "Name: $name\nEmail: $email\nPosition: $position\n\n";
    $message .= "Educational Background:\n$education\n\n";
    $message .= "Work Experience:\n$work_experience\n\n";
    $message .= "Achievements and Awards:\n$achievements\n\n";
    $message .= "Cover Letter:\n$cover_letter";

    $headers = "From: $email";

    if (mail($recipient_email, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
}

?>
