function muestraParrafo(parrafo){
    this.style='opacity: 0.5';//revisar esto
    parrafo.style='display:block;background-color:white;opacity:0.8';
};
function ocultaParrafo(imagen,parrafo){
    this.style='background-image:url(imagen); background-position: center; background-repeat: no-repeat;';
    parrafo.style='display:none';
}
