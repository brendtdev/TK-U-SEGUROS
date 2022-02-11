//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.10;// 10%
var edad_25 = 0.20;// 20%
var edad_50 = 0.30;// 30%

var casado_18 = 0.10;// 10%
var casado_25 = 0.20;// 20%
var casado_50 = 0.30;// 30%

var hijos_recargo = 0.20;// 20%

var recargo_conyuge_18 = 0.10;// 0.10%
var recargo_conyuge_25 = 0.20;//0.20%
var recargo_conyuge_50 = 0.30;//0.30%

var cargo_casado = 0;

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0


//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var edad_afiliado = parseInt(edad)

//condicion mayor de edad
if (edad_afiliado >=18){
  
var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var cargo_conyuge=0;
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("edad esposo/a")
  var edad_conyuge_numero = parseInt(edad_conyuge)
  if(edad_conyuge_numero >=18 && edad_conyuge_numero <=24){
     cargo_conyuge = precio_base * recargo_conyuge_18
     cargo_casado = precio_base * casado_18
}
  
  if(edad_conyuge_numero >=25 && edad_conyuge_numero <=49){
    cargo_conyuge = precio_base * recargo_conyuge_25
    cargo_casado = precio_base * casado_25
  }
  
  if(edad_conyuge_numero >=50){
    cargo_conyuge = precio_base * recargo_conyuge_50
    cargo_casado = precio_base * casado_50
}
 }


var porcentaje_hijo= 0;
var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen

var cant_hijos=0;
var final_hijos=0;
if("SI" == hijos.toUpperCase()){
    cant_hijos = prompt("cantidad de hijos/as?")
    var hijos_numero = parseInt(cant_hijos)
     final_hijos =  hijos_numero * hijos_recargo * precio_base
}
  
// calculos para edad del afiliado 
else if("NO" == casado.toUpperCase()){
   (edad_afiliado >=18 && edad <=24)
    recargo = precio_base * edad_18
  
    if (edad_afiliado >=25 && edad_afiliado <=49){
    recargo = precio_base * edad_25
}
 
if (edad_afiliado >=50){
    recargo = precio_base * edad_50 
}
 }
   }

else {
  alert("afiliado debe ser mayor de edad ")
}

//Resultado ehpantalla 
precio_final = precio_base + recargo + final_hijos + cargo_conyuge + cargo_casado
alert ("Para el asegurado "+nombre)
alert ("sobre un precio base de Q"+precio_base)
alert("cargo extra por hijo agregado es Q"+final_hijos)
alert("cargo extra por conyuge es Q"+cargo_conyuge)
alert("cargo si esta casado es Q"+cargo_casado)
alert ("el precio final es de Q"+precio_final)
