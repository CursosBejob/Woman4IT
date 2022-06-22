// Funciones


let num1 = 5;
let num2 = 10;

function suma() {
    console.log("La suma de " + num1 + " y " + num2 + " es " + (num1 + num2));
}

suma();



//Funciones con parámetros

function suma2(num1, num2) {
    console.log("La suma de " + num1 + " y " + num2 + " es " + (num1 + num2));
}

//Sobrecarga de funciones
function suma2(num1, num2, num3) {
    console.log("La suma de " + num1 + " y " + num2 + " y " + num3 + " es " + (num1 + num2 + num3));
}

suma2(3, 5);

suma2(3, 5, 6);

//Cuando no sé cuántos parámetros tendré que usar

function numeros(num1, num2, ...otros) {
    document.write(num1 + " , " + num2 + "<br>");
    document.write(otros);
}
numeros(2, 3, 4, 54, 332);

//En este caso tendríamos dos parámetros fijos, el 2 y el 3, y un array llamado "otros" formado por 4, 54, 332


