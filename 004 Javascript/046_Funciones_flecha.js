// Funciones flecha o funciones arrow


function sumame(num1, num2, sumaYmuestra, sumaPorDos) {
    var suma = num1 + num2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumame(5, 7, dato => {
        console.log('La suma es ', dato);
    },
    dato => {
        console.log('La suma de dos es', (dato * 2));
    });



//Es como haber hecho
function sumame(num1, num2) {
    var suma = num1 + num2;
    return suma;
}

function sumaYmuestra(suma) {
    console.log('La suma es '+ suma);

}

function sumaPorDos(suma) {
    console.log('La suma de dos es '+ (suma * 2));

}

sumame(5, 7);
sumaYmuestra(suma);
sumaPorDos(suma);