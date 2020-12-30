"use strict";

var logoPrincipal = document.getElementById('logo-oficial');
logoPrincipal.addEventListener('click', function () {
  location.assign('../../index.html');
});

function validarCampos() {
  var fName = document.getElementById('fname').value;
  var lName = document.getElementById('lname').value;
  var pNumber = document.getElementById('phone').value;
  var genderMale = document.getElementById('male');
  var genderFemale = document.getElementById('female');

  if (fName == '' || lName == '' || isNaN(parseInt(pNumber))) {
    alert('Existen campos obligatorios no diligenciados o en el formato incorrecto.');
  }

  if (genderFemale.checked) {
    console.log('Female');
  } else if (genderMale.checked) {
    console.log('Male');
  } else {
    console.log('Other');
  }
}