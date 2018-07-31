function mostrar()
{
    var cont = 0;
    var numero;
    var letra;
    var continuar = "si";
    var contPar = 0;
    var contImp = 0;
    var contCero = 0;
    var contPos = 0;
    var promPos;
    var sumaPos = 0;
    var sumaNeg = 0;
    var max = -100;
    var min = 100;
    var letraMax;
    var letraMin;
    while(continuar == "si"){
        cont++;
        letra = prompt("Ingrese una letra.");
        letra = letra.toLowerCase();
        numero = prompt("Ingrese un número.");
        numero = parseInt(numero);
        while(numero < -100 || numero > 100 || isNaN(numero)){
            numero = prompt("Error: ingrese un número.");
        }
        continuar = prompt("¿Quiere continuar?");
        continuar = continuar.toLowerCase();
        while(continuar != "si" && continuar != "no"){
            continuar = prompt("Error: ¿Quiere continuar?");
        }
    if(numero == 0){
        contCero++;
    }else if(numero % 2 == 0){
        contPar++;
    }else{
        contImp++;
    }

    if(numero > 0){
        sumaPos+= numero;
        contPos++;
    }else{
        sumaNeg+= numero;
    }

    if(numero < min){
        min = numero;
        letraMin = letra;
    }
    if(numero > max){
        max = numero;
        letraMax = letra;
    }
    }
    promPos = sumaPos / contPos;
    document.write("La cantidad de numeros pares es: " + contPar + "<br>");
    document.write("La cantidad de numeros impares es: " + contImp + "<br>");
    document.write("La cantidad de ceros es: " + contCero + "<br>");
    document.write("El promedio de los positivos es: " + promPos + "<br>");
    document.write("La suma de los negativos es: " + sumaNeg + "<br>");
    document.write("El numero del maximo es: " + max + " la letra es: " + letraMax + "<br>");
    document.write("El numero del min es: " + min + " la letra es: " + letraMin + "<br>");
}
