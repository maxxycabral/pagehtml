
//Validcion de formulario 1
function Validacion() {
  if (document.formulario.mensaje.value.length == 0) {
    alert("Debe escribir un mensaje");
    document.formulario.apellido.focus();
    return false;
  }

  if (document.formulario.nombre.value.length == 0) {
    alert("Debe escribir un nombre");
    document.formulario.nombre.focus();
    return false;
  }
  if (document.formulario.apellido.value.length == 0) {
    alert("Debe escribir un apellido");
    document.formulario.apellido.focus();
    return false;
  }

  if (document.formulario.telefono.value.length == 0) {
    alert("Debe escribir un Telefono");
    document.formulario.email.focus();
    return false;
  }
  if (document.formulario.email.value.length == 0) {
    alert("Debe escribir un email");
    document.formulario.email.focus();
    return false;
  } else {
    alert("Formulario Completado");
  }
}

//Validcion de formulario 2
function Validacion() {
  if (document.formulario.mensaje.value.length == 0) {
    alert("Debe escribir un mensaje");
    document.formulario.apellido.focus();
    return false;
  }

  if (document.formulario.nombre.value.length == 0) {
    alert("Debe escribir un nombre");
    document.formulario.nombre.focus();
    return false;
  }
  if (document.formulario.apellido.value.length == 0) {
    alert("Debe escribir un apellido");
    document.formulario.apellido.focus();
    return false;
  }

  if (document.formulario.telefono.value.length == 0) {
    alert("Debe escribir un Telefono");
    document.formulario.email.focus();
    return false;
  }
  if (document.formulario.email.value.length == 0) {
    alert("Debe escribir un email");
    document.formulario.email.focus();
    return false;
  } else {
    alert("Formulario Completado");
  }
}

