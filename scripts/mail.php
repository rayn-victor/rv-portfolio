<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $formcontent = "From: $name \n Message: $message";
    $recipient = 'rayn.victor27@gmail.com';
    $subject = $_POST['subject'];
    $mailheader = "FROM: $email \r\n";
    
    mail($recipient, $subject, $formcontent, $mailheader) or die ("Error!");
    "Thank you!";
