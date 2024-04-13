// Variables globales
let operadorSel = "";

window.onload = function () {
    //Aquí todo lo que querías que se ejecute al principio del script
    // (al principio = cuando se produzca el evento de página cargada)

    //Asociar eventos
    // boton1 = document.getElementById('b01');
    // boton1.addEventListener('click',pintarNumero);
    // boton2 = document.getElementById('b02');
    // boton2.addEventListener('click',pintarNumero);
    // boton3 = document.getElementById('b03');
    // boton3.addEventListener('click',pintarNumero);
    // boton4 = document.getElementById('b04');
    // boton4.addEventListener('click',pintarNumero);

    botones = document.getElementsByClassName('bnum');
    for (boton of botones){
        boton.addEventListener('click',pintarNumero);
    }
}

function pintarNumero(event){
    // console.log(event.target.id);
    //Buscar el elemento donde quiero pintar (#num1)
    let num1 = document.getElementById('num1');
    //Escribo el número anterior y el nuevo número
    if (num1.innerHTML == "--"){
        num1.innerHTML = event.target.id[2];
    }
    else{
        num1.innerHTML = num1.innerHTML + event.target.id[2];
    }
}