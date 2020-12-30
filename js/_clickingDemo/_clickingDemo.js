var logoPrincipal = document.getElementById('logo-oficial');
logoPrincipal.addEventListener('click', () => {
    location.assign('../../index.html')
});

var link1 = document.getElementById('link1');
link1.addEventListener('click', () => {
    document.getElementById('alertlink1').style.visibility = 'visible';
    document.getElementById('alertlink1').style.textAlign = 'center'
    document.getElementById('alertlink1').style.color = '#980d24'
    document.getElementById('alertlink1').style.fontSize = '18px'
    window.open('https://www.google.com', '_blank');
});

var link2 = document.getElementById('link2');
var contaClicks = 0;
link2.addEventListener('click', () => {
    contaClicks++;
    console.log(contaClicks);
    if (contaClicks == 2) {
        document.getElementById('alertlink2').style.visibility = 'visible';
        document.getElementById('alertlink2').style.textAlign = 'center'
        document.getElementById('alertlink2').style.color = '#980d24'
        document.getElementById('alertlink2').style.fontSize = '18px'
    } else {
        document.getElementById('alertlink2').style.visibility = 'hidden';
        if (contaClicks != 2 && contaClicks > 2) {
            contaClicks = 0;
        }
    }
});


var link3 = document.getElementById('link3');
link3.addEventListener('click', () => {
    document.getElementById('alertlink3').style.visibility = 'visible';
    document.getElementById('alertlink3').style.textAlign = 'center'
    document.getElementById('alertlink3').style.color = '#980d24'
    document.getElementById('alertlink3').style.fontSize = '18px'
    window.open('https://www.google.com', '_blank');

});

var link4 = document.getElementById('link4');
link4.addEventListener('click', () => {
    document.getElementById('alertlink4').style.visibility = 'visible';
    document.getElementById('alertlink4').style.textAlign = 'center'
    document.getElementById('alertlink4').style.color = '#980d24'
    document.getElementById('alertlink4').style.fontSize = '18px'
    window.open('https://www.google.com', '_blank');
});