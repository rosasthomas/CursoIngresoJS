/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var numeroUno,numeroDos,resultado;
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno + numeroDos;
	alert("La suma es " + resultado)
}

function restar()
{
    var numeroUno,numeroDos,resultado;
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno - numeroDos;
	alert("La resta es " + resultado);
}

function multiplicar()
{ 
    var numeroUno,numeroDos,resultado;
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno * numeroDos;
	alert("La multiplicación es " + resultado);
}

function dividir()
{
	var numeroUno,numeroDos,resultado;
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno / numeroDos;
	alert("La división es " + resultado);
}

