import { translation } from './translation.js'
import  serviceReference  from './serviceUi.js';
import { servicesText } from './servicesTexts';

var currentLanguage = 'es';

$('#languageSelect').on('change', ()=>{
    currentLanguage = $('#languageSelect').val();
    translateTo(currentLanguage);
    translateSelectedService();
});

//Translate the page to the language wich receive as parameter
function translateTo(language){
    for(var key in translation[language]){
        $('#'+key).html(translation[language][key]);  
    }
    translatePlaceholder(language);
}

function translatePlaceholder(language){
        for(var key in translation.placeholders[language]){
            $('#'+key).attr("placeholder",translation.placeholders[language][key]);  
    
        }
}
function translateSelectedService(){
    let currentService = serviceReference.getCurrentService();
    $('#serviceDetailTitle').html(servicesText[currentService][currentLanguage].title);
    $('#serviceDetailInfo').html(servicesText[currentService][currentLanguage].info);
}

export { currentLanguage };
