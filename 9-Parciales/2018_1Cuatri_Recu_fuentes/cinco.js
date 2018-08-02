function mostrar()
{
var dia;
dia = prompt("Ingrese dia");
switch (dia) {
    case "sabado":
    case "domingo":
       msg = ("buen finde");
        break;
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        msg = ("a trabajar");
        break;
    default:
        msg = ("ingrese un dia valido");
    break;
}
alert(msg);
}
