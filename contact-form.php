<?php
    if(isset($_POST['submit'])){
        $firstName = $_POST['firstname'];
        $lastName = $_POST['lastname'];
        $mailFrom = $_POST['email'];
        $message = $_POST['comment'];

        $mailTo = 'jholt@go2rebel.com';
        $headers = 'From: '.$mailFrom;
        $txt = 'You have recieved an email from '.$firstName.' '.$lastName.'.\n\n.'. $message;
        mail($mailTo, $txt, $headers);
        header('Location: index.php?mailsend');
    }
