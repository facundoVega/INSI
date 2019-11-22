
$('#contactSendButton').on("click", function(event){
  event.preventDefault();
  sendEmail(obtainFieldValues());
  
  
  });
    
  function obtainFieldValues(){
    let data = {
      phone: $('#placeholderPhone').val(),
      name: $('#placeholderName').val(),
      mail:$('#placeholderMail').val(),
      company:$('#placeholderCompany').val(),
      message:$('#placeholderTextarea').val()
    }
    return data;
  }

 function sendEmail(data){
   console.log("Entra al metodo");
showSpinner();
setTimeout(function(){hideSpinner() }, 3000);
  //  console.log("Valores a enviar", data );
  // $.post("enviar.php",
  // data,
  // function(data,status){
  //   alert("Data: " + data + "\nStatus: " + status);
  // });
  }

  function showSpinner(){
    $('#spinnerContainer').removeClass("hide");
    $('#spinnerContainer').addClass("show");
  }
  function hideSpinner(){
    $('#spinnerContainer').removeClass("show");
    $('#spinnerContainer').addClass("hide");
  }