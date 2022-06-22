// Función con parámetros predefinidos
/*
let n_num1;
let n_num2;
let is_sumar;

function suma(n_num1, n_num2, is_sumar = true) {
    if (is_sumar == true) {
        return (n_num1 + n_num2);
    }else{
        return (n_num1 - n_num2);
    }
}

document.write(suma(5,8, false));
  */  
//------------------------------------
//------------------------------------
let n_num3;
let n_num4;

function suma2(n_num3 = 5, n_num4 = 10){
 document.write(n_num3 + n_num4);
}

suma2(56,34);

//Si no le paso parámetros, me cogerá los parámetros por defecto, es decir, 5 y 10. 
suma2();


