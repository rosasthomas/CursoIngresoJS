function mostrar()
{
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
while(true){
	numero = prompt("Ingrese numero y para finalizar ingrese si");
	if(numero == "si"){
		break;
	}
	contador++;
	numero = parseInt(numero);
	if(numero > -1){
		positivo+= numero;
	}else {
		negativo*= numero;
	}
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN