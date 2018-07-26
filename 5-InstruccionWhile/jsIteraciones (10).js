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
			sumaPositivos+= positivos;	
			
		}else if(numero < 0){
			negativos = numero;
			contarNegativos++;
			sumaNegativos+= negativos;
			
		}else if(numero == 0){
			contarCero++;
		}
//Separar positivos de negativos, contarlos y Suma positivos y negativos

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
document.write("La cantidad de números positivos es: " + contarPositivos + "<br>");
document.write("La cantidad de numeros negativos es: " + contarNegativos + "<br>");
document.write("La cantidad de numeros pares es: " + contarPar + "<br>");
document.write("La cantidad de ceros es: " + contarCero + "<br>");
document.write("El promedio de números positivos es: " + promedioPositivos + "<br>");
document.write("El promedio de números negativos es: " + promedioNegativos + "<br>");
//document.write("la diferencia entre la cantidad de números positivos y negativos es: " + diferencia + "<br>");
document.write(msg);
}//FIN DE LA FUNCIÓN