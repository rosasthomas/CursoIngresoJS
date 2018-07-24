function mostrar()
{

	var contador=0;
	// declarar variables
	var respuesta = 'si';
	var numero = 0;
	var max;
	var min;
	var bandera = true;
while(true){
	numero = prompt("Ingrese un número y para finalizar ingrese si");
	if(bandera){
		bandera = false;
		max = numero;
		min = numero;
	}
	if(numero == "si"){
		break;
	}
	contador++;
	numero = parseInt(numero);
	if(numero > max){
		max = numero;
	}else if(numero < min){
		min = numero;
	}
}
document.getElementById("maximo").value = max;
document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN