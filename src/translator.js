import { translation } from './translation.js'

var currentLanguage;
$('#languageSelect').on('change', ()=>{
    currentLanguage = $('#languageSelect').val();
    translateTo(currentLanguage);
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
export { currentLanguage };
