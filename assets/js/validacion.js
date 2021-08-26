
//Validcion de formulario

function Validacion() {
  // Aqui validamos el campo de mensajes
  if (document.formulario.mensaje.value.length == 0) {
    alert("Debe escribir un mensaje");
    document.formulario.apellido.focus();
    return false;
  }
  // Aqui validamos el campo de nombre

  if (document.formulario.nombre.value.length == 0) {
    alert("Debe escribir un nombre");
    document.formulario.nombre.focus();
    return false;
  }
  // Aqui validamos el campo de apellido
  if (document.formulario.apellido.value.length == 0) {
    alert("Debe escribir un apellido");
    document.formulario.apellido.focus();
    return false;
  }
  // Aqui validamos el campo de telefono
  if (document.formulario.telefono.value.length == 0) {
    alert("Debe escribir un Telefono");
    document.formulario.email.focus();
    return false;
  }
  // Aqui validamos el campo de email
  if (document.formulario.email.value.length == 0) {
    alert("Debe escribir un email");
    document.formulario.email.focus();
    return false;
  } else {
    alert("Formulario Completado");
  }
}


