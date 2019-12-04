const select = $('#serviceList');

select.on('click', event=>{
    
    if(event.target.classList.contains('service-item')){
        styleElement(event.target) ;
        showSelectedService(event.target);
    }
});


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

}



