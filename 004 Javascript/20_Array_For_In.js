//Recorrer Arrays con un For...In

var nombres = ["Angel", "Sara", "Manolo", "Ana"];

for (let elemento in nombres) {
  document.write("<li>" + nombres[elemento] + "</li>");
}

