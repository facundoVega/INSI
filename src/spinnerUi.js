  function showSpinner(){
        $('#spinnerContainer').removeClass("hide");
        $('#spinnerContainer').addClass("show");
      }
  function hideSpinner(){
        $('#spinnerContainer').removeClass("show");
        $('#spinnerContainer').addClass("hide");
      }
const spinner = {
    show:showSpinner,
    hide:hideSpinner
};
export default spinner;





