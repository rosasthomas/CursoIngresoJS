function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    if(edad >= 18){
        alert("Es mayor de edad");
    }
    if (edad >= 13 && edad <= 17){
        alert("Es adolescente");
    }
    if (edad < 13){
        alert("Es menor");
    }



}//FIN DE LA FUNCIÓN