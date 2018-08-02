function mostrar()
{
    var nombre;
    var cantidadPag;
    var cantidadVentas;
    var tema;
    var resp = "si";

    while(resp == "si"){
        nombre = prompt("ingrese nombre");
        cantidadPag = prompt("ingrese cantidad de paginas");
        cantidadVentas = prompt("cantidad de ventas");
            while(cantidadVentas < 0){
                
            }






        resp = prompt("¿quiere continuar?");
            while(resp != "si" && resp != "no"){
                resp = prompt("error: ¿quiere continuar?");                
            }
    }
}
