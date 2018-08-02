function mostrar()
{
var numero;
var contDiv = 0;
numero = prompt("Ingrese su numero");
numero = parseInt(numero);
for(var i = 1; i < numero; i++){
        if(numero % i == 0){
            alert(i);
            contDiv++;
        }
    }
alert("Hubo " + contDiv + " numeros divisores.");



}//FIN DE LA FUNCIÓN