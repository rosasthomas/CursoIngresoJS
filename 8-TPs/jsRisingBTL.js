/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estadoCivil;
 var sueldoBruto;
 var legajo;
 var nacionalidad;

 edad = prompt("Ingrese su edad.");
 while(edad){
 if(edad > 17 && edad < 91){
     document.getElementById("Edad").value = edad;
     break;
 }else{
     edad = prompt("Error: Ingrese su edad.");
 }
 }
// Edad

sexo = prompt("Ingrese su sexo (F ó M)")
while(sexo){
switch(sexo){
    case "F":
            document.getElementById("Sexo").value = sexo;
    break;
    case "M":
            document.getElementById("Sexo").value = sexo;
    break;
    default:
             sexo = prompt("Error: Ingrese su sexo (F ó M)");
}
if(sexo == "F" || sexo == "M"){
    break;
}
}
//Sexo

estadoCivil = prompt("Ingrese su estado civil 1- Para soltero, 2- Para casados, 3- Para divorciados y 4- Para viudos");
while(estadoCivil){
    switch(estadoCivil){
        case "1":
                document.getElementById("EstadoCivil").value = "Soltero";
        break;
        case "2":
                document.getElementById("EstadoCivil").value = "Casado";
        break;
        case "3":
                document.getElementById("EstadoCivil").value = "Divorciado";
        break;
        case "4":
                document.getElementById("EstadoCivil").value = "Viudo";
        break;
        default:
                estadoCivil = prompt("Error: Ingrese su estado civil 1- Para soltero, 2- Para casados, 3- Para divorciados y 4- Para viudos");
    }
    if(estadoCivil == 1 || estadoCivil == 2 || estadoCivil == 3 || estadoCivil == 4){
        break;
    }
}
//Estado civil

 sueldoBruto = prompt("Ingrese su sueldo bruto.");
 while(sueldoBruto){
 if(sueldoBruto > 7999){
     document.getElementById("Sueldo").value = sueldoBruto;
     break;
 }else{
     sueldoBruto = prompt("Error: Ingrese su sueldo bruto.");
 }
 }
 // Sueldo bruto

 legajo = prompt("Ingrese su número de legajo.");
 while(legajo){
 if(legajo > 999 && legajo < 10000){
     document.getElementById("Legajo").value = legajo;
     break;
 }else{
     legajo = prompt("Error: Ingrese su número de legajo.");
 }
 }
 // Numero de legajo

 nacionalidad = prompt("Ingrese su nacionalidad A- Para Argentino E- Para extranjero N- Para nacionalizado.");
 while(nacionalidad){
    switch(nacionalidad){
        case "A":
                document.getElementById("Nacionalidad").value = "Argentino";
        break;
        case "E":
                document.getElementById("Nacionalidad").value = "Extranjero";
        break;
        case "N":
                document.getElementById("Nacionalidad").value = "Nacionalizado";
        break;
        default:
                nacionalidad = prompt("Error: Ingrese su nacionalidad.");
    }
    if(nacionalidad == A || estadoCivil == E || estadoCivil == N){
        break;
    }
}
}