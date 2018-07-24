function mostrar()
{
	var numero;
	var positivos;
	var negativos;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var contarPositivos = 0;
	var contarNegativos = 0;
	var contarCero = 0;
	var contarPar = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var contador = 0;
	//declarar contadores y variables 
	var respuesta="si";

	while(true){
		numero = prompt("Ingrese numero y para finalizar ingrese si");
	if(numero == "si"){
		break;
	}
		contador++;
		numero = parseInt(numero);
		
	while(isNaN(numero)){
		numero = prompt("Ingrese numero y para finalizar ingrese si");
		numero = parseInt(numero);
	}
//Funcion while		

		if(numero > 0){
			positivos = numero;
			contarPositivos++;
		}else if(numero < 0){
			negativos = numero;
			contarNegativos++;
		}else if(numero == 0){
			contarCero++;
		}
//Separar positivos de negativos y contarlos

	sumaNegativos+= negativos;
	sumaPositivos+= positivos;	
//Suma positivos y negativos

if(numero % 2 == 0 && numero != 0){
	contarPar++;
}
//Contar pares

promedioPositivos = sumaPositivos/contarPositivos;
promedioNegativos = sumaNegativos/contarNegativos;
//Promedios

diferencia = contarPositivos - contarNegativos;
if(diferencia > 0){
	msg = ("Hay " + diferencia + " números positivos más");
}else if(diferencia == 0){
	msg = ("Hay la misma cantidad");
}else{
	msg = ("Hay " + diferencia + " números negativos más");
}
//Diferencia
}
document.write("La suma de los números negativos es: " + sumaNegativos + "<br>");
document.write("La suma de los números positivos es: " + sumaPositivos + "<br>");

}//FIN DE LA FUNCIÓN