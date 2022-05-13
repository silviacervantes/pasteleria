function muestraParrafo(parrafo){
    parrafo.style='display:block;background-color:white;opacity:0.7';
};
function ocultaParrafo(imagen,parrafo){
    this.style='background-image:url(imagen); background-position: center; background-repeat: no-repeat;';
    parrafo.style='display:none';
};

/* Validacion formulario */
function validar_envio(){
    if(document.f_registro.nombre.value.length==0){
        alert("Ingrese su nombre");
        document.f_registro.nombre.focus();
        return 0;
    }
    if(document.f_registro.apellido.value.length==0){
        alert("Ingrese su apellido");
        document.f_registro.apellido.focus();
        return 0;
    }
    if((document.f_registro.email.value.length==0) && (validarEmail(document.f_registro.email.value))){
        alert("Ingrese su email");
        document.f_registro.email.focus();
        return 0;
    }
    if(document.f_registro.cometnario.value.length < 50){
        alert("El comentario debe ser mayor a 50 caracteres.");
        document.f_registro.comentario.focus();
        return 0;
    }
    alert("Gracias por sus comentarios.");
    document.f_registro.submit();
};

function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     return true}else {return false}
  }

