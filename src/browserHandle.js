import "./modernizr";

if (!Modernizr.flexbox) {
 
 $('#originalContent').html(createMessage());
  } 


function createMessage(){
    const div = document.createElement('div');
    div.className = 'not-render-message-container';
    div.innerHTML =`<img src="./static/logo.png" width="100px" height="auto" style="margin:0 auto">
                    <h2>Para poder visualizar este sitio por favor actualize su navegador.</h2>
                    <h2>Please in order to visualize this site , you will require update your browser.</h2>
                       `;
    return div;
}