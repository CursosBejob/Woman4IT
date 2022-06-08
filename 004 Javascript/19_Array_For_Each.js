//Recorrer Arrays con un For...Each

document.write("<ul>");

var nombres = ["Angel", "Sara", "Manolo", "Ana"];

nombres.forEach((i) => {
  document.write("<li>" + i + "</li>");
});

document.write("</ul>");

//Recorrer un array con for..each poniendo indices

document.write("<ul>");
var nombres = ["Angel", "Sara", "Manolo", "Ana"];
nombres.forEach((elemento, index) => {
  document.write("<li>" + index + "  " + elemento + "</li>");
});
document.write("</ul>");
