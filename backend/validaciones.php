<?php

$name = $_POST['name'];
$email = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$company = $_POST['company'];

$errorObject = new stdClass();
$errorObject->inputErrors = array();

if(empty($name) || empty($email) || empty($phone) || empty($message) || empty($company)){
    $errorObject->errorExist = true;
    $errorObject->message =  "<span class='form-error'>Debe completar todos los campos</span>";
    
    if(empty($name)){
        array_push(  $errorObject->inputErrors,"#placeholderName");
      
    }
    if(empty($email)){
        array_push(  $errorObject->inputErrors,"#placeholderMail");
       
    }
    if(empty($phone)){
        array_push(  $errorObject->inputErrors,"#placeholderPhone");
       
    }
    if(empty($message)){
        array_push(  $errorObject->inputErrors,"#placeholderMessage");
    }
      if(empty($company)){
        array_push(  $errorObject->inputErrors,"#placeholderCompany");
    }
      

    
}
elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $errorObject->errorExist = true;
    $errorObject->message ="<span class='form-error'>Escriba un email valido!<//span>";
    array_push(  $errorObject->inputErrors,"#placeholderMail");
}
?>




