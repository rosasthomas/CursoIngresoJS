
function mostrar()
{   var base,altura,superficie,perimetro;
    base = prompt("Base");
    altura = prompt("Altura");
    base = parseInt(base);
    altura = parseInt(altura);
    superficie = base * altura;
    superficie = superficie / 2;
    perimetro = base * 3;
    alert("La superficie del triangulo es " + superficie + " y el perimetro es " + perimetro);
}