// Codigo del Cuadrado
function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado*4;
}
perimetroCuadrado();

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
}
areaCuadrado();


// Codigo del Triangulo
function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
perimetroTriangulo();

function areaTriangulo(baseTriangulo,alturaTriangulo){
    return baseTriangulo*alturaTriangulo/2;
}
areaTriangulo();

// Codigo del Ciruclo
function perimetroCirculo(radioCirculo){
    return 2*Math.PI*radioCirculo;
}
perimetroCirculo();

function areaCirculo(radioCirculo){
    return Math.PI*radioCirculo*radioCirculo;
}
areaCirculo();

// Haciendo la conexion con HTML
// Cuadrado
function calcularPerimetroCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value=input.value;
    const perimetro= perimetroCuadrado(value);
    return alert(perimetro);
}

function calcularAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value=input.value;
    const area= areaCuadrado(value);
    return alert(area);
}

// Triangulo
function calcularPerimetroTriangulo(){
    const input1=document.getElementById("inputLado1");
    const value1=parseInt(input1.value);
    const input2=document.getElementById("inputLado2");
    const value2=parseInt(input2.value);
    const input3=document.getElementById("inputTrianguloBase");
    const value3=parseInt(input3.value);
    const perimetro= perimetroTriangulo(value1,value2,value3);
    return alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1=document.getElementById("inputTrianguloBase");
    const value1=input1.value;
    const input2=document.getElementById("inputTrianguloAltura");
    const value2=input2.value;
    const area= areaTriangulo(value1,value2)
    return alert(area);
}
// Circulo
function calcularPerimetroCirculo(){
    const input= document.getElementById("inputCirculo");
    const value=input.value;
    const perimetro= perimetroCirculo(value);
    return alert(perimetro);
}

function calcularAreaCirculo(){
    const input= document.getElementById("inputCirculo");
    const value=input.value;
    const area= areaCirculo(value);
    return alert(area);
}



