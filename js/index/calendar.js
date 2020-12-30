const input = document.querySelector('#fecha');

input.addEventListener('change', (event) => {
    const result2 = document.querySelector('.Aviso');
    result2.textContent = `La fecha esta al final de la pagina`;
    const result = document.querySelector('.fechas');
    result.textContent = `You like ${event.target.value}`;
});


// function fecha() {
//     let fecha = document.getElementById("fecha");
//     console.log(fecha);
//     let p = document.createElement("p");
//     p.innerHTML = fechaConvert;
//     ref.appendChild(p);
// }