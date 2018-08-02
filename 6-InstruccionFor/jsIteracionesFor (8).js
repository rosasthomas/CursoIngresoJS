function mostrar()
{
var numero;
var contDiv = 0;
numero = prompt("Ingrese un numero.");
numero = parseInt(numero);
if(numero == 2){
    alert("Es primo.");
}else{
    for(var i = 2; i <= numero; i++){
        if(numero % i == 0){
            alert("No es primo.");
            break;
        }else{
            alert("Es primo.");
            break;
        }
    }
}
}//FIN DE LA FUNCIÓN
/*
var numero;
var contDiv = 0;
numero = prompt("Ingrese un numero.");
numero = parseInt(numero);
for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
        contDiv++;
    }
}
    if(contDiv == 2){
         alert("Es primo.");
     }else{
         alert("No es primo.");
     }
*/