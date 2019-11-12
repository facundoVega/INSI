<?php
    $destino = "horacio_facundo.vega@hotmail.com";
    $asunto = "Contacto desde Insis WEB";

    $nombre = $_POST['name'];
    $mensaje = $_POST['message'];
    $correo = $_POST['mail'];
    $telefono = $_POST['phone'];
    $empresa = $_POST['company'];

    $contenido = "Nombre: " . $nombre  ."\nCorreo: " . $telefono . "\nTelefono: " . $telefono . "\nMensaje: " ."\nEmpresa: ". $empresa . "\n". $mensaje;

    mail($destino, $asunto , $contenido);

?>