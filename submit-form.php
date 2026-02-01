<?php
// Green Jobs Galore - Contact Form Handler
// This file handles form submissions and sends emails

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data and sanitize
    $firstName = strip_tags(trim($_POST["firstName"]));
    $lastName = strip_tags(trim($_POST["lastName"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $message = strip_tags(trim($_POST["message"]));
    
    // Recipient email
    $recipient = "info@greenjobsgalore.com";
    
    // Email subject
    $subject = "Green Jobs Galore - New Service Request from $firstName $lastName";
    
    // Email content
    $email_content = "New Contact Form Submission\n\n";
    $email_content .= "Name: $firstName $lastName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Email headers
    $email_headers = "From: $firstName $lastName <$email>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Redirect to thank you page or back to home with success message
        http_response_code(200);
        header("Location: index.html?success=1");
        exit;
    } else {
        // Error sending email
        http_response_code(500);
        header("Location: index.html?error=1");
        exit;
    }
    
} else {
    // Not a POST request
    http_response_code(403);
    echo "There was a problem with your submission. Please try again.";
}
?>
