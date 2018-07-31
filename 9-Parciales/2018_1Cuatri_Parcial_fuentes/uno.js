
function mostrar()
{
    var nombre;
    var sexo;
    var edad;
    var cont = 0; 
    var contMujeres = 0;
    var contHombres = 0;
    var contMayores = 0;
    var contMenores = 0;
    var contHombresMayores = 0;
    var min = 101;
    var max = 0;
    var sumaMujeres = 0;
    var sumaEdad = 0;
    var sumaHombres = 0;
    var promedioEdad;
    var promedioHombres;
    var promedioMujeres;
    var nombreViejo;
    var nombreJoven;
    var sexoViejo;
    var nombreMujerVieja;

    while(cont < 4){
        cont++;
        nombre = prompt("Ingrese su nombre.");

        sexo = prompt("Ingrese su sexo (f ó m)");
        sexo = sexo.toLowerCase();
            while(sexo != "f" && sexo != "m"){
                sexo = prompt("Error: Ingrese su sexo (f ó m)");
            }
       
        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
            while(edad < 0 || edad > 100 || isNaN(edad)){
                    edad = prompt("Error: Ingrese su edad");
            }

        if(sexo == "f"){
            contMujeres++;
            sumaMujeres+= edad;

        }else{
            contHombres++;
            sumaHombres+= edad;
            if(edad > 18){
                contHombresMayores++;
            }
        }

        if(edad < 18){
            contMenores++;
        }else{
            contMayores++;
        }

        if(edad < min){
            min = edad;
            nombreJoven = nombre;

        }
        if(edad > max){
            max = edad;
            nombreViejo = nombre;
            sexoViejo = sexo;
        }

        sumaEdad+= edad;
        
    } //Fin contador 4

    promedioEdad = sumaEdad / 4;
    promedioHombres = sumaHombres / contHombres;
    promedioMujeres = sumaMujeres / contMujeres;
    promedioEdad = parseInt(promedioEdad);
    promedioHombres = parseInt(promedioHombres);
    promedioMujeres = parseInt(promedioMujeres);

document.write("La cantidad de mujeres es: " + contMujeres + "<br>");
document.write("La cantidad de hombres es: " + contHombres + "<br>");
document.write("La cantidad de mayores de edad es: " + contMayores + "<br>");
document.write("La cantidad de menores de edad es: " + contMenores + "<br>");
document.write("La cantidad de hombres mayores de edad es: " + contHombresMayores + "<br>");
document.write("La edad más baja es: " + min + "<br>");
document.write("La edad más alta es: " + max + "<br>");
document.write("El promedio de edad de mujeres es: " + promedioMujeres + "<br>");
document.write("El promedio de edad de hombres es: " + promedioHombres + "<br>");
document.write("El promedio de edad total es: " + promedioEdad + "<br>");
document.write("El nombre del más viejo es: " + nombreViejo + "<br>");
document.write("El nombre del más joven es: " + nombreJoven + "<br>");
document.write("El sexo del más viejo es: " + sexoViejo + "<br>");
document.write("El nombre de la mujer más viejo es: " + nombreMujerVieja + "<br>");
}