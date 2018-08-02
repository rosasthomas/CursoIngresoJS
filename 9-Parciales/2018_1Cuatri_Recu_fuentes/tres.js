function mostrar()
{
    var precio;
    var porcentaje;
    var desc;
    var precioDesc;
    var iva;
    var precioFinal;
    precio = prompt("Ingrese el precio");
    porcentaje = prompt("Ingrese le porcentaje");
    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);
    desc = (precio * porcentaje) / 100;
    precioDesc = precio - desc;
    iva = 
    precioFinal = precioDesc * 1.21;
    document.getElementById("elPrecioFinal").value = precioFinal;
    alert("El descuento en dinero es: " + desc + " el precio con el descuento es: " + precioDesc + " el iva es de 21%"); 
}
/*
    var precio,descuento,precioFinal,dineroDescuento,precioDescuento;
    precio = prompt("Precio:");
    descuento = prompt("Descuento %:");
    precio = parseInt(precio);
    descuento = parseInt(descuento);
    descuento = descuento /100;
    dineroDescuento = precio * descuento;
    precioDescuento = precio - dineroDescuento;
    alert("El descuento en dinero es $" + dineroDescuento + " el precio con el descuento es $" + precioDescuento + " y el iva es de 21%");
    precioFinal = precioDescuento *1.21;
    document.getElementById("elPrecioFinal").value = precioFinal;
*/