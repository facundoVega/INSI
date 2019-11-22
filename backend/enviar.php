<?php
    if(isset($_POST['name'], $_POST['mail'], $_POST['phone'], $_POST['message'], $_POST['company'])){
        //Post data
        $name = $_POST['name'];
        $email = $_POST['mail'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $company = $_POST['company'];
        //mail settings
        $to = "horacio_facundo.vega@hotmail.com";
        $subject = 'Contacto de pagina INSI';

        $body = "NOMBRE: ".$name . "\n MAIL: ". $email . "\n TELEGONO: ". $phone."\n COMPANY: ". $company . "\n Mensaje: ".$message; 
        if(mail($to, $subject, $body)){
                    $feedback = '*Message sent! You will receive a reply shortly!';
                }else{
                    $feedback = '*Message failed to send';
                }

    }else{
        $feedback = 'Missing Params';
    }
    echo $feedback;

?>