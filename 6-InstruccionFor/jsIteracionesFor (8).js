function mostrar()
{
var numero;
var contDiv = 0;
numero = prompt("Ingrese un numero.");
numero = parseInt(numero);
for(var i = 1; i < numero; i++){
    if(numero % i == 0){
        contDiv++;
    }
}
    if(contDiv == 2){
         alert("Es primo.");
     }
}//FIN DE LA FUNCIÓN