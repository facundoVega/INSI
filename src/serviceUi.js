import { servicesText } from './servicesTexts';
import { currentLanguage } from './translator.js';

const select = $('#serviceList');
let currentService;
const accesoriesField = 'accesories';

$(document).ready(()=>{
  handleServiceSelected($('#serviciosFirstTitle')[0]);
});
  
select.on('click', event=>{
    if(event.target.classList.contains('service-item')){
        handleServiceSelected(event.target);
    }
});

//Handle the selected service
function handleServiceSelected(element){
    setCurrentService(element.dataset.fieldtext);
    styleElement(element) ;
    showSelectedService(element);
}

//Function related to styling the selected element
function styleElement(element){
    let parentId = element.dataset.parentid;
    removeAllClasses('arrow');
    $('#'+parentId).addClass('arrow');
}

function removeAllClasses(className){
    $('#firstServiceItem').removeClass(className);
    $('#secondServiceItem').removeClass(className);
    $('#thirdServiceItem').removeClass(className);
    $('#fourthServiceItem').removeClass(className);
}
//End of functions wich styling the selected element.

function showSelectedService(element){
    
    $('#accesoriesList').removeClass('show-accesories-list');
    $('#serviceDetailTitle').html(servicesText[element.dataset.fieldtext][currentLanguage].title);
    $('#serviceDetailInfo').html(servicesText[element.dataset.fieldtext][currentLanguage].info);
    
    if(element.dataset.fieldtext == accesoriesField){
        $('#serviceContainer').html('');
        $('#accesoriesList').addClass('show-accesories-list');
        
       return 
    }
    $('#serviceContainer').html(`<img id="serviceDetailImage" class="animated zoomIn" src=${servicesText[element.dataset.fieldtext].img} class="" alt="" width="100%" height="auto" id="serviceSelectedPaneles">`);
}
function setCurrentService(service){
    currentService = service;
}

function getCurrentService(){
    return currentService;
}

const serviceReference = {
    getCurrentService : getCurrentService
}

export default serviceReference;