// Uso de Return




function pedirNumeros() {
    let num1 = Number(prompt("Introduzca número1"));
    let num2 = Number(prompt("Introduzca número2"));
    

    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else if(num1 == num2){
        alert("Ambos números son iguales");
    }
}

var resultado = pedirNumeros();

console.log(resultado);

