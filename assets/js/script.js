
let precio = 400000;
let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


let n = 0;
let cantidadSpan = document.querySelector(".cantidad");
let totalapagar = document.querySelector(".valor-total");

let botonMas = document.querySelector(".boton-mas");
let botonMenos = document.querySelector(".boton-menos");


botonMas.onclick = function() {
    n++;
    cantidadSpan.innerHTML = n;
    totalapagar.innerHTML = precio * n;
};


botonMenos.onclick = function() {
    if (n > 0) {
        n--;
        cantidadSpan.innerHTML = n;
        if (n > 0) {
            totalapagar.innerHTML = precio * n;
        } else {
            totalapagar.innerHTML = "";
        }
    }
};


document.querySelector('#selector').onchange = function() {
    let selector = document.querySelector('#selector');
    let card = document.querySelector('.card');
    card.style.backgroundColor = selector.value;
};
