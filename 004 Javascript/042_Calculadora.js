// Calculadora con funciones


function elegir(){
    var eleccion = prompt("Pulse 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir");
    
    if(eleccion == 1){
        suma();
    }else if (eleccion == 2){
        resta();
    }else if(eleccion == 3){
        multiplica();
    }else if(eleccion ==4){
        divide();
    }else{
        alert("Opción inválida. Pruebe otra vez.");
    }
}


function suma(){
    var num1 = Number(prompt("Introduzca número 1"));
    var num2 = Number(prompt("Introduzca número 2"));
    var resultado = num1 + num2;

    alert("La suma de " + num1 + " y " + num2 + " es igual a " + resultado);
}

function resta(){
    var num1 = Number(prompt("Introduzca número 1"));
    var num2 = Number(prompt("Introduzca número 2"));
    var resultado = num1 - num2;

    alert("La resta de " + num1 + " menos " + num2 + " es igual a " + resultado);
}

function multiplica(){
    var num1 = Number(prompt("Introduzca número 1"));
    var num2 = Number(prompt("Introduzca número 2"));
    var resultado = num1 * num2;

    alert("La nultiplicación de " + num1 + " por " + num2 + " es igual a " + resultado);
}

function divide(){
    var num1 = Number(prompt("Introduzca número 1"));
    var num2 = Number(prompt("Introduzca número 2"));
    var resultado = num1 / num2;

    alert("La división de " + num1 + " entre " + num2 + " es igual a " + resultado);
}



elegir();