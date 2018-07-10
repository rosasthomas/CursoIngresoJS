function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero = parseInt(Math.random() * (10 - 1) + 1);
	if(numero == 9 || numero == 10){
		alert("Excelente");
	}else{
		if(numero > 4){
			alert("Aprobó");
		}else{
			alert("Vamos, la proxima se puede")
		}
	}
}//FIN DE LA FUNCIÓN