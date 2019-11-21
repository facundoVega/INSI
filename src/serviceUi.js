import { ServicesEnum } from './serviceEnum.js'
import {  currentLanguage } from './app.js'




const select = $('#serviceList');
const close = $('#closeIcon');


select.on('click', event=>{
    if(event.target.classList.contains('service-image')){
        const infoServiceSelected = getDataToRender(event.target.id);
        setSelectedService(infoServiceSelected);
        $('#selectedServiceContainer').css('display', 'flex');
    }
});

close.on('click', ()=>{
    $('#selectedServiceContainer').css('display', 'none');
});
    
//Set the current title and image to the selected container
function setSelectedService(serviceSelected){
    $('#selectedServiceTitle').html(serviceSelected.title);
    $('#selectedServiceImage').attr('src', serviceSelected.img);
}

//Return the data that need to be render according the id of  selected image.
function getDataToRender(id){
    let data ={
        title:"",
        img:""
    }
    switch(id) {
       case ServicesEnum.INDUSTRY:
            data.title = currentLanguage == "english" ? "Industrial Inst" :"Inst. Industriales";
            data.img = "./static/inst-industriales.jpg";
          break;
        case ServicesEnum.SOLARPANEL:
            data.title =currentLanguage == "english" ? "Solar Panels":"Paneles solares";
            data.img = "./static/panel-solar-min.jpg";
          break;
        case ServicesEnum.ELECTRONEUMATIC:
            data.title =currentLanguage == "english" ? "Electropneumatic":"Electroneumatica";
            data.img = "./static/electroneumatica-min.jpg";
          break;
        default:
                data.title =currentLanguage == "english" ? "Accesories" :"Accesorios";
                data.img = "./static/repuestos.jpg";
            }

            return data;
         
}
