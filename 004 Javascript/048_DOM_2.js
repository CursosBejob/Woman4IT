// DOM

var funcionSuma = function (num1, num2) {
    var num1 = Number(document.getElementById("numero1").value);
    var num2 = Number(document.getElementById("numero2").value);
    var resultado = num1 + num2;
    return resultado;
  }

  var funcionResta = function (num1, num2) {
    var num1 = Number(document.getElementById("numero1").value);
    var num2 = Number(document.getElementById("numero2").value);
    var resultado = num1 - num2;
    return resultado;
  }

  var funcionMultiplica = function (num1, num2) {
    var num1 = Number(document.getElementById("numero1").value);
    var num2 = Number(document.getElementById("numero2").value);
    var resultado = num1 * num2;
    return resultado;
  }

  var funcionDivide = function (num1, num2) {
    var num1 = Number(document.getElementById("numero1").value);
    var num2 = Number(document.getElementById("numero2").value);
    var resultado = num1 / num2;
    return resultado;
  }