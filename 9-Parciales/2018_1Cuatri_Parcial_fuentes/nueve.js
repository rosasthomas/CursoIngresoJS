function mostrar()
{
    var marca;
    var peso;
    var temp;
    var resp = "si";
    var contTempPar = 0;
    var marcaPesado;
    var contCeroGrados = 0;
    var promPeso;
    var max = 0;
    var min = 101;
   while(resp == "si"){
    marca = prompt("Ingrese la marca.");

    peso = prompt("Ingrese el peso del producto.");
    while(peso < 1 || peso > 100 || isNaN(peso)){
        peso = prompt("Error: Ingrese el peso del producto.");
    }

    temp = prompt("Ingrese la temperatura de almacenamiento.");
    while(temp < -30 || temp > 30 || isNaN(temp)){
        temp = prompt("Error: Ingrese la temperatura de almacenamiento.");
    }
    resp = prompt("¿Quiere continuar?");

    if(temp % 2 == 0){
        contTempPar++;
    }
 }
}
