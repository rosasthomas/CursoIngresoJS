function mostrar()
{
    var nota;
    var sexo;
    var sumaNotas = 0;
    var promedioNota;
    var min = 11;
    var sexoMin;
    var contVarones = 0;
    for(var i = 0; i < 5; i++){
        nota = prompt("Ingrese la nota");
        nota = parseInt(nota);
            while(nota < 0 || nota > 10 || isNaN(nota)){
                    nota = prompt("Error: Ingrese la nota");
            }
        sumaNotas+= nota;
        
        sexo = prompt("Ingrese el sexo.");
        sexo = sexo.toLowerCase();
        while(sexo != "m" && sexo != "f"){
            sexo = prompt("Error: Ingrese el sexo.");
        }

        if(nota < min){
            min = nota;
            sexoMin = sexo
        }
        if(nota > 6){
            contVarones++;
        }
    }
    promedioNota = sumaNotas / 5;
document.write("El promedio de las notas totales es: " + promedioNota + "<br>");
document.write("La nota más baja es: " + min + " el sexo es: " + sexoMin + "<br>");
document.write("La cantidad de varones con nota mayor o igual a 6 es: " + contVarones + "<br>");
}
