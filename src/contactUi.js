

//SEND BUTTON ON DESKTOP
$('#contactSendButton').on("click", function(event){
  event.preventDefault();
  sendEmail(obtainFieldValues());
});

//SEND BUTTON ON MOBILE
$('#sendButtonMobile').on("click", function(event){
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
  openSpinnerSection();
  $.post("enviar.php",
  data,
  function(data,status){
    spinner.hide();
    data = JSON.parse(data);
    showServerMessages(data);
  })
  .fail(function(error){
    spinner.hide();
    console.error("server error");
  });
} 
    

  function openSpinnerSection(){
    $('#spinnerSection').addClass('show');
  }
  function closeSpinnerSection(){
    $('#spinnerSection').removeClass('show');
  }

  function showServerMessages(data){
    $('#serverMessage').html(data.message);
    removeInputErrors();
    if(data.errorExist){
      paintErrorsInput(data.inputErrors);
    }
    else{
      cleanInputs();
      setTimeout(function(){ $('#serverMessage').html("") }, 7000);
    }
  }


  //Empty inputs value.
  function cleanInputs(){
    $('#placeholderPhone').val("");
    $('#placeholderName').val("");
    $('#placeholderMail').val("");
    $('#placeholderCompany').val("");
    $('#placeholderTextarea').val("");
  }


  //Remove the mark of the inputs wich had had errors.
  function removeInputErrors(){
    $('#placeholderPhone').removeClass("error-input");
    $('#placeholderName').removeClass("error-input");
    $('#placeholderMail').removeClass("error-input");
    $('#placeholderCompany').removeClass("error-input");
    $('#placeholderTextarea').removeClass("error-input");
  }


  //Mark each input wich contains errors
  function paintErrorsInput(inputs){
    inputs.forEach(input => {
      $(input).val("");
      $(input).addClass("error-input");
    });
  }


 