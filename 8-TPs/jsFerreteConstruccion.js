/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo,ancho,resultado;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    resultado = largo + ancho;
    resultado = resultado * 2;
    resultado = resultado * 3;
    alert("Se necesitan " + resultado + "metros de alambre");
}
function Circulo () 
{
	var radio,resultado;
    radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    resultado = 2 * Math.PI * radio;
    resultado = resultado * 3;
    alert("Se necesitan " + resultado + " metros de alambre");
}
function Materiales () 
{
	var largo,ancho,cal,cemento,superficie
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    superficie = largo * ancho;
    cemento = superficie * 2;
    cal = superficie * 3;
    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}