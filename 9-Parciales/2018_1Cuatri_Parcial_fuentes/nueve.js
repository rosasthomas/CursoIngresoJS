function mostrar()
{
    var marca;
    var peso;
    var temp;
    var resp = "si";
    var contTempPar = 0;
    var marcaPesado;
    var contCeroGrados = 0;
    var sumaPeso = 0;
    var promPeso;
    var max = 0;
    var min = 101;
    var cont = 0
   while(resp == "si"){
    cont++;
    marca = prompt("Ingrese la marca.");

    peso = prompt("Ingrese el peso del producto.");
    peso = parseInt(peso);
    while(peso < 1 || peso > 100 || isNaN(peso)){
        peso = prompt("Error: Ingrese el peso del producto.");
    }

    temp = prompt("Ingrese la temperatura de almacenamiento.");
    temp = parseInt(temp);
    while(temp < -30 || temp > 30 || isNaN(temp)){
        temp = prompt("Error: Ingrese la temperatura de almacenamiento.");
    }
    resp = prompt("¿Quiere continuar?");
    resp = resp.toLowerCase();
    while(resp != "si" && resp != "no"){
        resp = prompt("Error: ¿Quiere continuar?");
    }
    if(temp % 2 == 0 && temp != 0){
        contTempPar++;
    }
    if(peso > max){
        max = peso
        marcaPesado = marca
    }
    if(peso < min){
        min = peso;
    }
    if(temp < 0){
        contCeroGrados++;
    }
    sumaPeso+= peso;
    promPeso = sumaPeso / cont;

 }
 document.write("La cantidad de temperaturas pares es: " + contTempPar + "<br>");
 document.write("La marca del producto más pesado es: " + marcaPesado + "<br>");
 document.write("La cantidad de que se conservan a menos de 0 grados es: " + contCeroGrados + "<br>");
 document.write("El promedio del peso de todos los productos es: " + promPeso + "<br>");
 document.write("El peso máximo es: " + max + " y el peso mínimo es: " + min + "<br>");
 document.write("El peso mínimo es: " + min + "<br>");
}