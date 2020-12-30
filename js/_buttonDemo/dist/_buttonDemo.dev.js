"use strict";

var logoPrincipal = document.getElementById('logo-oficial');
logoPrincipal.addEventListener('click', function () {
  location.assign('../../index.html');
});
var clickMe1 = document.getElementById('clickme1');
var clickMe2 = document.getElementById('clickme2');
var clickMe3 = document.getElementById('clickme3');
var txtEscrito = document.getElementById('txtinput');
var txtArea = document.getElementById('txtarea');
clickMe1.addEventListener('click', function () {
  var txtCapturado = txtEscrito.value;
  txtEscrito.value = '';
  txtArea.innerHTML = '';
  txtArea.readOnly = false;
  txtArea.innerHTML = "Se escribe el valor que ingreso en el cuadro de texto del input Mediante el boton Click Me 1 + texto del input: --> ".concat(txtCapturado);
  txtArea.readOnly = true;
});
clickMe2.addEventListener('click', function () {
  txtArea.innerHTML = '';
  txtArea.readOnly = false;
  var mensaje;

  function alerta() {
    var opcion = confirm("Clicka en Aceptar o Cancelar");

    if (opcion == true) {
      mensaje = "Has clickado OK";
    } else {
      mensaje = "Has clickado Cancelar";
    }
  }

  ;
  alerta();
  txtArea.innerHTML = "Click Me 2 + Aceptar del Alert: --> ".concat(mensaje);
  txtArea.readOnly = true;
});
clickMe3.addEventListener('click', function () {
  txtArea.innerHTML = '';
  txtArea.readOnly = false;
  var mensaje2;

  function alerta2() {
    var opcion = prompt("Introduzca su nombre:", "Aner Barrena");

    if (opcion == null || opcion == "") {
      mensaje2 = "Has cancelado o introducido el nombre vacío";
    } else {
      mensaje2 = "Hola " + opcion;
    }
  }

  alerta2();
  txtArea.innerHTML = "Click Me 3 + texto del Alert: --> ".concat(mensaje2);
  txtArea.readOnly = true;
});