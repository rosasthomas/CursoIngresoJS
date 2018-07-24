function mostrar()
{
var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var numero;
while(true){
	numero = prompt("Ingrese un número y para terminar ingrese si");
	if(numero == "si"){
		break;
	}
	contador++;
	numero = parseInt(numero);
	acumulador+= numero;
}
document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/contador;
}

/* FIN DE LA FUNCIÓN
break = saltar y continuar 
continue = saltar y volver
isNaN(num) = para evaluar si el valol es NaN [Nan no es igual a sí mismo]

var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var numero;
while(respuesta == "si"){
	contador++;
	numero = prompt("Ingrese un número");
	numero = parseInt(numero);
	acumulador+= numero;
	respuesta = prompt("¿Quiere continuar?");
}
document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/contador;
*/

