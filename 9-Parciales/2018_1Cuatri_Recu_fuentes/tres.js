function mostrar()
{
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
}
