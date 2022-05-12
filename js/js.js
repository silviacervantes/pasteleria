function muestraParrafo(parrafo){
    parrafo.style='display:block;background-color:white;opacity:0.7';
};
function ocultaParrafo(imagen,parrafo){
    this.style='background-image:url(imagen); background-position: center; background-repeat: no-repeat;';
    parrafo.style='display:none';
};

/* Validacion formulario */
function validarEmail(valor) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor))){
     alert("Ingrese una direccion de email valida");
  }
};
