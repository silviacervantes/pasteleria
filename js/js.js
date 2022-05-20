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
    if(!validarEmail(document.f_registro.email.value)){
        alert("Ingrese un email correcto");
        document.f_registro.email.focus();
        return 0;
    }
    if(document.f_registro.comentario.value.length < 50){
        alert("El comentario debe ser mayor a 50 caracteres.");
        document.f_registro.comentario.focus();
        return 0;
    }
    alert("Gracias por sus comentarios.");
    document.f_registro.submit();
};

function validarEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
 

