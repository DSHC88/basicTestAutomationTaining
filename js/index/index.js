window.onload = () => {
    borrar();
}
window.addEventListener("load", () => {
    document.getElementById('phone').addEventListener('keypress', soloNumeros, false);
});

const borrar = () => {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('male').checked = true;
}

const escribirDatos = (firstName, lastName, phoneNumber, gender, eMail) => {
    let texto = `Los datos que fueron ingresados son Nombre: ${firstName}, Apellido: ${lastName}, Numero de telefono: ${phoneNumber}, Genero: ${gender}, E-mail: ${eMail}.`;
    let ref = document.getElementById('aside2');
    let p = document.createElement("p");
    p.innerHTML = texto;
    ref.appendChild(p);
    borrar();
}

const validarCampos = () => {
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;
    let pNumber = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let genderMale = document.getElementById('male');
    let genderFemale = document.getElementById('female');
    let gender = '';
    if (genderFemale.checked) {
        gender = 'Female';
    } else if (genderMale.checked) {
        gender = 'Male';
    } else {
        gender = 'Other';
    }
    if (fName == '' || lName == '' || isNaN(parseInt(pNumber))) {
        alert('Existen campos obligatorios no diligenciados o en el formato incorrecto.');
    } else {
        escribirDatos(fName, lName, pNumber, gender, email);
    }
}

function soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}