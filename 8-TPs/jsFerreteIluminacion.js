/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio,precioDescuento,impuesto,precioTotal,cantidad,marca;
    marca = document.getElementById("Marca").value;
    precio = 35;
    cantidad = document.getElementById("Cantidad").value;
    precioTotal = precio * cantidad;
    if(cantidad > 5){
        precioDescuento = precioTotal * 0.50;
        precioDescuento = precioTotal - precioDescuento;
        document.getElementById("precioDescuento").value = precioDescuento;
    }else if(cantidad == 5 && marca == "ArgentinaLuz"){
        precioDescuento = precioTotal * 0.40;
        precioDescuento = precioTotal - precioDescuento;
        document.getElementById("precioDescuento").value = precioDescuento;
        }else if(cantidad == 5 && marca != "ArgentinaLuz"){
            precioDescuento = precioTotal * 0.30;
            precioDescuento = precioTotal - precioDescuento;
            document.getElementById("precioDescuento").value = precioDescuento;
            }else if(cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){
                precioDescuento = precioTotal * 0.25;
                precioDescuento = precioTotal - precioDescuento;
                document.getElementById("precioDescuento").value = precioDescuento;
                }else if(cantidad == 4 && (marca != "ArgentinaLuz" ||marca != "FelipeLamparas")){
                    precioTotal = precio * 4;
                    precioDescuento = precioTotal * 0.20;
                    precioDescuento = precioTotal - precioDescuento;
                    document.getElementById("precioDescuento").value = precioDescuento;
                     }else if(cantidad == 3 && marca == "ArgentinaLuz"){
                         precioTotal = precio * 3
                         precioDescuento = precioTotal * 0.15;
                         precioDescuento = precioTotal - precioDescuento;
                         document.getElementById("precioDescuento").value = precioDescuento;
                         }else if(cantidad == 3 && marca == "FelipeLamparas"){
                             precioTotal = precio * 3;
                             precioDescuento = precioTotal * 0.10;
                             precioDescuento = precioTotal - precioDescuento;
                             document.getElementById("precioDescuento").value = precioDescuento;
                             }else if(cantidad == 3 && (marca != "ArgentinaLuz" && marca != "FelipeLamparas"))
                             precioTotal = precio * 3;
                             precioDescuento = precioTotal * 0.05;
                             precioDescuento = precioTotal - precioDescuento;
                             document.getElementById("precioDescuento").value = precioDescuento;
                             }
                         }
                     }
                }
            }
        }
            if(precioDescuento > 119){
                                 impuesto = precioDescuento * 0.10;
                                 precioDescuento = precioDescuento * 1.10;
                                 document.getElementById("precioDescuento").value = precioDescuento;
                                 alert("Usted pago " + impuesto + " de IIBB.");
                             }
    }