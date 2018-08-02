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
    var banderaMujer = false;
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
        sumaNotas+= nota;
        if(nota < min){
            min = nota;
            sexoMin = sexo;
        }
        if(sexo == "m" && edad > 18 && nota >= 6){
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

}
