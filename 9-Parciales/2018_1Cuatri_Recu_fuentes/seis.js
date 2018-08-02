function mostrar()
{
    var nota;
nota = document.getElementById("laHora").value
switch (nota) {
    case "0":
    case "1":
    case "2":
    case "3":
        msg = "La proxima se puede";
     break;
    case "4":
    case "5":
    case "6":
        if(nota < 5){
            msg = "raspando, debes preocuparte mas";
        }else{
        msg = "Raspando";
        }
     break;
    case "7":
    case "8":
    case "9":
    case "10":
        if(nota > 8){
            msg = "aprobo, muy bien";
        }else{
            msg = "aprobo";
        }
     break;
    default:
        msg = "ingrese una nota valida";
}
alert(msg);
}