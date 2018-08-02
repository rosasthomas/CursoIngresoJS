function mostrar()
{
var numeroUno;
var numeroDos;
var div;
var suma;
if( numeroUno == numeroDos){
    alert("Son iguales " + numeroUno + " y " + numeroDos);
}else if(numeroUno > numeroDos){
   div = numeroUno / numeroDos;
   alert("La division es: " + div);
}else{
    suma = numeroDos + numeroUno;
}
if(suma < 50){
    alert("La suma es " + suma + " y es menor a 50");
}else{
    alert("La suma es " + suma);
}
}
