/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura, resultado;
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    resultado = temperatura - 32;
    resultado = temperatura * 5;
    resultado = temperatura /9;
    alert(temperatura + " Fahrenheit son " + resultado + " centígrados");
}

function CentigradosFahrenheit () 
{
	var temperatura, resultado;
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    resultado = temperatura;
    resultado = temperatura; 
    resultado = temperatura;
    alert(temperatura + " centígrados son " + resultado + " Fahrenheit");
}
