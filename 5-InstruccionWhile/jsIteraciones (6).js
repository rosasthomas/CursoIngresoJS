function mostrar()
{

	var contador= 0;
	var acumulador = 0;
while(contador < 5){
	contador++;
	numero = prompt("ingrese un número.");
	numero = parseInt(numero);
	acumulador+= numero;
}
document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/contador;

}//FIN DE LA FUNCIÓN