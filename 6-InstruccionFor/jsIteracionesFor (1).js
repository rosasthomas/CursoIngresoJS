function mostrar()
{
var numero;
var contDiv = 0;
numero = prompt("Ingrese un numero.");
numero = parseInt(numero);
if(numero == 2){
    alert("Es primo.");
}else{
    for(var i = 1; i <= numero; i++){
        for(var a = 2 ; a <= numero;a++){
            if(numero % a == 0){
                console.log(a + "No es primo.");
                 break;
            }else{
                alert( a + "Es primo.")
                break;
            }
        }
    }
 }
}
/* 
var suma = 1;
    for(var i = 0; i < 10; i++){
        alert(suma++);
    }
*/