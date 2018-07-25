/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var maquina;
var eleccionJugador;
var piedra = 1;
var papel = 2;
var tijera = 3;

function comenzar()
{
    eleccionMaquina = parseInt(Math.random() * (4 - 1) + 1);
    console.log(eleccionMaquina);
}//FIN DE LA FUNCIÓN
function piedra(){
    alert("asd");
    eleccionJugador = 1
    document.getElementById("piedra()").value = eleccionJugador;
    if(eleccionJugador == piedra){
        alert("Empató");
}else if(eleccionJugador == papel){
    alert("Perdió");
}else{
    alert("Ganó");
}
}//FIN DE LA FUNCIÓN
function papel()
{
   document.getElementById("papel()").value = alert("asd");
    
}//FIN DE LA FUNCIÓN
function tijera()
{
    
}//FIN DE LA FUNCIÓN

/*
document.getElementById("piedra()").value = piedra;
document.getElementById("papel()").value = papel;
document.getElementById("tijera()").value = tijera;

    if(eleccionMaquina == piedra){
        maquina = ;
    }else if(eleccionMaquina == 2){
        maquina = papel ;
    }else if(eleccionMaquina == 3){
        maquina = tijera;
    }
*/