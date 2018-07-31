function mostrar()
{
    var numero1;
    var numero2;
    var resultado
    numero1 = prompt("Ingrese un número");
    numero2 = prompt("Ingrese un segundo número");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2)
    if(numero1 == numero2){
        alert("numero 1: " + numero1 + " numero 2: " + numero2);
    }else if(numero1 > numero2){
        resultado = numero1 - numero2;
        alert("La resta es: " + resultado);
    }else{
        resultado = numero1 + numero2;
        if(resultado > 10){
            alert("La suma es: " + resultado + " y superó el 10.")
        }else{
            alert("La suma es: " + resultado);
        }
    }
}
