<?php

$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formMessage = "Name: $firstName \n Message: $message";
$recipient = "sarah@go2rebel.com";
$subject = "Message from Website";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formMessage, $mailheader) or die("Error!");
echo "Thank You!";


?>