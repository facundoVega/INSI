!function(e){var o={};function t(i){if(o[i])return o[i].exports;var s=o[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=o,t.d=function(e,o,i){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var s in e)t.d(i,s,function(o){return e[o]}.bind(null,s));return i},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=12)}([function(e,o,t){},function(e,o,t){e.exports=t.p+"static/logo.png"},function(e,o,t){e.exports=t.p+"static/aire-comprimido.png"},function(e,o,t){e.exports=t.p+"static/control-procesos.jpg"},function(e,o,t){e.exports=t.p+"static/electroneumatica-min.jpg"},function(e,o,t){e.exports=t.p+"static/repuestos.jpg"},function(e,o,t){e.exports=t.p+"static/panel-solar-min.jpg"},function(e,o,t){e.exports=t.p+"static/inst-industriales.jpg"},function(e,o,t){e.exports=t.p+"static/gases-medicinales.jpg"},function(e,o,t){e.exports=t.p+"static/electroneumatica.jpg"},function(e,o,t){e.exports=t.p+"static/electroneumatica.png"},function(e,o){var t=$("#slider"),i=$("#btn-next"),s=$("#btn-prev");function r(){t.animate({marginLeft:"-200%"},700,(function(){$("#slider .slider__section:first").insertAfter("#slider .slider__section:last"),t.css("margin-left","-100%")}))}function a(){interval=setInterval((function(){r()}),1e4)}$("#slider .slider__section:last").insertBefore("#slider .slider__section:first"),t.css("margin-left","-100%"),i.on("click",(function(){r(),clearInterval(interval),a()})),s.on("click",(function(){t.animate({marginLeft:0},700,(function(){$("#slider .slider__section:last").insertBefore("#slider .slider__section:first"),t.css("margin-left","-100%")})),clearInterval(interval),a()}))},function(e,o,t){"use strict";t.r(o);t(0),t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10);var i={en:{contactMenu:"Contact",nosotrosMenu:"About us",serviciosMenu:"Services",trabajosMenu:"Works",sliderInstGases:"Installation of medical and industrial gases",sliderElectro:"Electro-pneumatic, hydraulic and pneumatic",sliderProcesos:"Process control",sliderAireComprimido:"Compressed air",sliderMobileGases:"Medicinal gases",sliderMobileElectro:"Electropneumatics and pneumatics",sliderMobileProcesos:"Process control",sliderMobileAire:"Compressed air",nosotrosTitle:"About us",nosotrosSubTitle:"What is INSI?",nosotrosParagraph:'Insi is a company dedicated to providing the best services and industrial facilities on the market, which has 10 years of experience providing support and industrial facilities to institutions ranging from hospitals, health centers, sanitary units to timber and sectors dedicated to industry known as "Heavy industry "',reasonsTitle:"Why choose us?",reasonsSubtitle:"Reasons to work with us:",reasonsSectionOneTitle:"Quality at Every Step",reasonsSectionOneParagraph:"Our philosophy on quality is simple; meet our clients’ expectations through continuous quality improvement and build our work right the first time.",reasonsSectionSecondTitle:"Ethics Standards",reasonsSectionSecondParagraph:"To us, ethical behavior is more than words on paper. It is a total commitment involving every employee, crossing all lines of business, impacting everything we do.",reasonsSectionThirdTitle:"Experiences",reasonsSectionThirdParagraph:"We have ample experience in the market, and we are more than qualified to meet the needs of your industry.",serviciosTittle:"Other of our services",serviciosFirstTitle:"Industrial Fac",serviciosSecondTitle:"Solar panels",serviciosThirdTitle:"Electropneumatics",serviciosFourthTitle:"Accessories",masInfoIndustrial:"More info..",masInfoPanel:"More info..",masInfoElectro:"More info..",masInfoRepuestos:"More info..",impactTitle:"we serve to connect",impactSubtitle:"The needs of your industry",impactParragraph:"Our company has successfully completed a wide range of projects. We are qualified to take on even the largest projects in the industry, for improvement applications.",contactoTitle:"Work with us",contactoSubtitle:"Fill in the fields, we'll contact you",contactSendButton:"Send",footerInicioLink:"-Home",footerContactLink:"-Contact",footerServiciosLink:"-Services",footerNosotrosLink:"-About us",footerDireccion:"Adress",footerTelefono:"Phone",footerMail:"Mail",footerNetworksTitle:"Follow us!"},es:{contactMenu:"Contacto",nosotrosMenu:"Nosotros",serviciosMenu:"Servicios",trabajosMenu:"Trabajos",sliderInstGases:"Instalacion de gases industriales y medicinales",sliderElectro:"Electroneumática, neumática e hidráulica",sliderProcesos:"Control de procesos",sliderAireComprimido:"Aire comprimido",sliderMobileGases:"Gases medicinales",sliderMobileElectro:"Electroneumática e hidráulica",sliderMobileProcesos:"Control de procesos",sliderMobileAire:"Aire comprimido",nosotrosTitle:"Sobre nosotros",nosotrosSubTitle:"¿Qué es INSI?",nosotrosParagraph:'Insi es una empresa dedicada a brindar los mejores servicios e instalaciones industriales del mercado, que cuenta con una experiencia de 10 años brindando soporte e instalaciones industriales a instituciones que van desde hospitales , centros de salud, unidades sanitarias hasta madereras y sectores dedicados a la industria conocida como "Industria pesada"',reasonsTitle:"¿Por que elegirnos?",reasonsSubtitle:"Razones para trabajar con nosotros:",reasonsSectionOneTitle:"Calidad en cada paso",reasonsSectionOneParagraph:"Nuestra filosofía de calidad es simple; Satisfacer las expectativas de nuestros clientes a través de la mejora continua de la calidad y desarrollar nuestro trabajo correctamente desde el inicio",reasonsSectionSecondTitle:"Estándares de ética",reasonsSectionSecondParagraph:"Para nosotros, el comportamiento ético es más que palabras en papel. Es un compromiso total que involucra a todos los empleados, cruza todas las líneas de negocios e impacta todo lo que hacemos.",reasonsSectionThirdTitle:"Experiencia",reasonsSectionThirdParagraph:"Tenemos una amplia experiencia en el mercado y estamos más que calificados para satisfacer las necesidades de su industria.",serviciosTittle:"Otros de nuestros servicios",serviciosFirstTitle:"Inst. industriales",serviciosSecondTitle:"Paneles solares",serviciosThirdTitle:"Electroneumática",serviciosFourthTitle:"Accesorios",masInfoIndustrial:"Mas info..",masInfoPanel:"Mas info..",masInfoElectro:"Mas info..",masInfoRepuestos:"Mas info..",impactTitle:"Servimos para conectar",impactSubtitle:"las necesidades de tu industria",impactParragraph:"Nuestra empresa ha completado con éxiot una amplia gama de proyectos. Estamos calificados para asumir incluso los proyectos mas grandes en la industria, aportando para aplicaciones de mejoras",contactoTitle:"Trabaje con nosotros",contactoSubtitle:"Complete los campos, nos contactaremos con usted",contactSendButton:"Enviar",footerInicioLink:"-Inicio",footerContactLink:"-Contacto",footerServiciosLink:"-Servicios",footerNosotrosLink:"-Nosotros",footerDireccion:"Dirección",footerTelefono:"Teléfono",footerMail:"Correo",footerNetworksTitle:"Seguinos!"},placeholders:{en:{placeholderName:"Name",placeholderMail:"Mail",placeholderCompany:"Company",placeholderPhone:"Phone",placeholderTextarea:"Message..."},es:{placeholderName:"Nombre",placeholderMail:"Correo",placeholderCompany:"Empresa",placeholderPhone:"Teléfono",placeholderTextarea:"Mensaje..."}}};$("#languageSelect").on("change",()=>{!function(e){for(var o in i[e])$("#"+o).html(i[e][o]);!function(e){for(var o in i.placeholders[e])$("#"+o).attr("placeholder",i.placeholders[e][o])}(e)}($("#languageSelect").val())});var s={INDUSTRY:"serviceSelectedInd",SOLARPANEL:"serviceSelectedPaneles",ELECTRONEUMATIC:"serviceSelectedElectro",ACCESORIES:"serviceSelectedRepuestos"};const r=$("#serviceList"),a=$("#closeIcon");r.on("click",e=>{if(e.target.classList.contains("service-image")){!function(e){$("#selectedServiceTitle").html(e.title),$("#selectedServiceImage").attr("src",e.img)}(function(e){let o={title:"",img:""};switch(e){case s.INDUSTRY:o.title="Inst. Industriales",o.img="./static/inst-industriales.jpg";break;case s.SOLARPANEL:o.title="Paneles solares",o.img="./static/panel-solar-min.jpg";break;case s.ELECTRONEUMATIC:o.title="Electroneumatica",o.img="./static/electroneumatica-min.jpg";break;default:o.title="Accesorios",o.img="./static/repuestos.jpg"}return o}(e.target.id)),$("#selectedServiceContainer").css("display","flex")}}),a.on("click",()=>{$("#selectedServiceContainer").css("display","none")});t(11)}]);