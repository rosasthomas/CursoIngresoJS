/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina,maquina,eleccionJugador,piedra,papel,tijera;
piedra = 1;
papel = 2;
tijera = 3;
function comenzar()
{
    eleccionMaquina = parseInt(Math.random() * (4 - 1) + 1);
    console.log(eleccionMaquina);
    if(eleccionMaquina == 1){
        maquina = document.getElementById("piedra");
    }else if(eleccionMaquina == papel){
        maquina =  document.getElementById("papel");
    }else if(eleccionMaquina == tijera){
        maquina = document.getElementById("tijera");
    }
}//FIN DE LA FUNCIÓN
function piedra()
{
    eleccionJugador = 1
    if(eleccionJugador == eleccionMaquina){
        
    }
}//FIN DE LA FUNCIÓN
function papel()
{
    
}//FIN DE LA FUNCIÓN
function tijera()
{
    
}//FIN DE LA FUNCIÓN