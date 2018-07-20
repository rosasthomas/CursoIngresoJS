/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina,maquina;
document.getElementById("piedra()") = 1;
document.getElementById("papel()") = 2;
document.getElementById("tijera()") = 3;
function comenzar()
{
    eleccionMaquina = parseInt(Math.random() * (4 - 1) + 1);
    console.log(eleccionMaquina);
    if(eleccionMaquina == document.getElementById("piedra").value ){
        maquina = document.getElementById("piedra").value;
    }else if(eleccionMaquina == document.getElementById("papel").value){
        maquina =  document.getElementById("papel").value;
    }else if(eleccionMaquina == document.getElementById("tijera").value){
        maquina = document.getElementById("tijera").value;
    }
}//FIN DE LA FUNCIÓN
function piedra()
{
    
}//FIN DE LA FUNCIÓN
function papel()
{
    
}//FIN DE LA FUNCIÓN
function tijera()
{
    
}//FIN DE LA FUNCIÓN