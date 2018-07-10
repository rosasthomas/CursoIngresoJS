function mostrar()
{
//tomo la edad  
    var edad;
    var estadoCivil;
    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil")
	if(edad < 18 && estadoCivil != "soltero"){
        alert("Es muy pequeño para NO ser soltero");
    }


}//FIN DE LA FUNCIÓN