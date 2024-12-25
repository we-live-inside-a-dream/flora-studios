<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lastName = htmlspecialchars($_POST['lastName']);
    $firstName = htmlspecialchars($_POST['firstname']);
    $email = htmlspecialchars($_POST['email']);
    $email = htmlspecialchars($_POST['project']);
    $email = htmlspecialchars($_POST['projectsq']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $source = htmlspecialchars($_POST['source']);

    $to = "rezanaeimabadi7@gmail.com";
    $email_subject = "New Contact Form Submission: $subject";
    $email_body = "You have received a new message from the contact form on your website.\n\n".
                  "Here are the details:\n".
                  "First Name: $firstName\n".
                  "Last Name: $lastName\n".
                  "Email: $email\n".
                  "Subject: $subject\n".
                  "Message: $message\n".
                  "How Did You Hear About Us: $source\n";

    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for contacting us, $firstName. We will get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>