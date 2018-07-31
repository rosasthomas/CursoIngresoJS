function mostrar()
{
    var planeta;
    planeta = prompt("Ingrese un planeta.");
    switch(planeta){
        case "tierra":
            alert("Aca vivimos");
        break;
        case "mercurio":
        case "venus":
            alert("Acá hace más calor");
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neputno":
            alert("Acá hace más frío");
        break;
        default:
            alert("Ese no es un planeta");
    }
}
