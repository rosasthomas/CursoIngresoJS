/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
contadorIntentos = 0;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = parseInt(Math.random() * (100 - 1) + 1);
	console.log(numeroSecreto)
}

function verificar()
{
  var numero,aproximado;
  numero = document.getElementById("numero").value;
   contadorIntentos += 1
  document.getElementById("intentos").value = contadorIntentos;
	if(numero == numeroSecreto){
    alert("Usted es un ganador!! y en solo " + contadorIntentos + " intentos.");
    numeroSecreto = parseInt(Math.random() * (100 - 1) + 1);
    console.log(numeroSecreto);
    contadorIntentos = 0;
  }else if(numero > numeroSecreto){
    aproximado = numero - numeroSecreto;
    alert("Se pasó " + aproximado + " del número");
    numeroSecreto = parseInt(Math.random() * (100 - 1) + 1);
    console.log(numeroSecreto);
  }else{
    aproximado = numeroSecreto - numero;
    alert("Le faltó " + aproximado + " para llegar número");
    numeroSecreto = parseInt(Math.random() * (100 - 1) + 1);
    console.log(numeroSecreto);
  }
  if(contadorIntentos == 1){
	  alert("Usted es un Psíquico");
  }else if(contadorIntentos == 2){
	  alert("Excelente percepción");
  }else if(contadorIntentos == 3){
	  alert("Esto es suerte");
  }else if(contadorIntentos == 4){
	  alert("Excelente técnica");
  }else if(contadorIntentos == 5){
	  alert("Usted está en la media");
  }else if(contadorIntentos > 5 && contadorIntentos < 11){
	  alert("Falta técnica");
  }else if(contadorIntentos > 10){
	  alert("afortunado en el amor!!");
  }
}