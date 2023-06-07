function calcular(){
    var base = prompt("Qual é a base do triangulo?");
    var altura = prompt("Qual é a altura do triangulo?");

    var area = (base*altura)/2;

    document.getElementById("area").innerHTML = 
    "Área do triangulo é " + area + "!";
}
