<?php
require_once 'validaciones.php';


    if( $errorObject->errorExist  != true){
        //mail settings
        $to = "horacio_facundo.vega@hotmail.com";
        $subject = 'Contacto de pagina INSI';
        $body = "NOMBRE: ".$name . "\n MAIL: ". $email . "\n TELEFONO: ". $phone."\n COMPANY: ". $company . "\n Mensaje: ".$message; 
        if(mail($to, $subject, $body)){
                    $errorObject->errorExist = false;
                    $errorObject->message = "<span class='form-success'>Mensaje enviado, nos contactaremos con usted de inmediato!</span>";
                    
                }else{
                    $errorObject->errorExist = true;
                    $errorObject->message = '*No se pudo mandar el mensaje';
                  
                }
        }
       
        echo json_encode($errorObject); 
?>

        

            
     




