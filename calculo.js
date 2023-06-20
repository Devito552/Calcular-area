function triangulo(){
    var base = prompt("Qual é a base do triangulo?");
    var altura = prompt("Qual é a altura do triangulo?");

    var area = (base*altura)/2;

    document.getElementById("area").innerHTML = 
    "Área do triangulo é " + area + "!";
}

function circulo(){
    var raio = prompt("Qual é o raio do circulo?");
    var pi = 3.14;
    var areacirculo = pi*(raio*raio);

    document.getElementById("area").innerHTML = 
    "Área do circulo é " + areacirculo + "!";
}

function quadrado(){
    var lado_1 = prompt("Qual é o lado 1 do Quadrado?");
    var lado_2 = prompt("Qual é o lado 2 do Quadrado?");

    var areaquadrado = lado_1*lado_2;

    document.getElementById("area").innerHTML = 
    "Área do quadrado é " + areaquadrado + "!";
}

function trapezio(){
    var basemaior = prompt("Qual é a base maior do trapezio?");
    var basemenor = prompt("Qual é a base menor do trapezio?");

    var areatrapezio = (basemaior+basemenor)/2;

    document.getElementById("area").innerHTML = 
    "Área do trapezio é " + areatrapezio + "!";
}


function pentagono(){
    var pentaraio = prompt("Qual é o raio do pentagono?");
    var pentalado = prompt("Qual é o lado do pentagono?");

    var areapenta = (pentalado*5)*pentaraio;

    document.getElementById("area").innerHTML = 
    "Área do pentagono é " + areapenta + "!";
}

function losango(){
    var losangoladomaior = prompt("Qual é a lado maior do losango?");
    var losangoladomenor = prompt("Qual é a lado menor do losango?");

    var arealosango = (losangoladomenor*losangoladomaior)/2;

    document.getElementById("area").innerHTML = 
    "Área do losango é " + arealosango + "!";
}