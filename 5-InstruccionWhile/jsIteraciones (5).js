function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while( sexo != "f".toUpperCase() && sexo != "m".toUpperCase()){
    sexo = prompt("Error: ingrese f ó m .");
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN