<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "a.okala25@gmail.com"; // Adresse e-mail où tu souhaites recevoir le message
    $subject = "Nouveau message de formulaire de contact";
    $headers = "From: $email";
    
    // Construction du corps du message
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message";
    
    // Envoi de l'e-mail
    mail($to, $subject, $email_content, $headers);
    
    // Redirection vers une page de confirmation
    header("Location: confirmation.html");
}
?>
