function mostrar()
{
    var nota;
    var edad;
    var sexo;
    var promNotas;
    var sumaNotas = 0;
    var min = 11;
    var sexoMin;
    var contVaronesMayoresNota = 0;
    var minEdad = 1000;
    var sexoJoven;
    var notaJoven;
    var contMujer = 0;
    var edadPrimerMujer;
    var notaPrimerMujer;
    for(var i = 0; i < 5; i++){

        nota = prompt("Ingrese nota");
        nota = parseInt(nota);
        while(nota < 0 || nota > 10 || isNaN(nota)){
          nota = prompt("Error: ingrese nota");
        }
        
        edad = prompt("ingrese edad");
        edad = parseInt(edad);

        sexo = prompt("ingrese sexo");
        sexo = sexo.toLowerCase()
        while(sexo != "f" && sexo != "m"){
            sexo = prompt("error: ingrese sexo");
        }
        if(sexo == "f"){
            contMujer++;
        }
        if(sexo == "f" && contMujer == 1){
            edadPrimerMujer = edad;
            notaPrimerMujer = nota;
            msg = ("La edad de la primer mujer es: " + edadPrimerMujer + " y la nota es: " + notaPrimerMujer);
        }else if(contMujer == 0){
            msg = ("No hubo ninguna mujer");
        }
        sumaNotas+= nota;
        if(nota < min){
            min = nota;
            sexoMin = sexo;
        }
        if(sexo == "m" && edad >= 18 && nota >= 6){
            contVaronesMayoresNota++;
        }
        if(edad < minEdad){
            sexoJoven = sexo;
            notaJoven = nota;
        }
        if(sexo == "f"){
        banderaMujer = true;
        }
    } // fin for
    promNotas = sumaNotas / 5;

    document.write("El promedio de las notas totales es: " + promNotas + "<br>");
    document.write("La nota mas baja es: " + min + " y el sexo es: " + sexoMin + "<br>");
    document.write("La cantidad de varones mayores a 18 y que su nota se mayor o igual a 6 es: " + contVaronesMayoresNota + "<br>");
    document.write("El sexo del mas joven es: " + sexoJoven + " y su nota es: " + notaJoven + "<br>");
    document.write(msg);

}
