function mostrar()
{
    var numero;
    var contPar = 0;
    numero = prompt("Ingrese su numero");
    numero = parseInt(numero);
    for(var i = 1; i <= numero; i++){
        if(i % 2 == 0){
            alert(i);
            contPar++;
        }
        
    }
alert("Hubo " + contPar + " numero pares.");


}//FIN DE LA FUNCIÓN