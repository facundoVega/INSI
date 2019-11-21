$('#contactSendButton').on("click", function(event){

    let fieldValue = obtainFieldValues();
    event.preventDefault();
    window.open('mailto:horacio_facundo.vega@hotmail.com');
   
   
  });

  function obtainFieldValues(){
    let data = {
        phone: $('placeholderPhone').fieldValue,
        name: $('placeholderName').fieldValue,
        mail:$('placeholderMail').fieldValue,
        company:$('placeholderCompany').fieldValue,
        message:$('placeholderTextarea').fieldValue
    }
    
    console.log("Data", data);
    return data;
  }