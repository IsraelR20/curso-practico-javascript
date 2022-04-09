// Codigo del Cuadrado
console.group("Cuadrado");
const ladoCuadrado=5;
console.log("Lado del cuadrado: "+ladoCuadrado+" cm");

const perimetroCuadrado=ladoCuadrado*4;
console.log("Perimetro del cuadrado: "+perimetroCuadrado+" cm");

const areaCuarado=ladoCuadrado*ladoCuadrado;
console.log("Area del cuadrado: "+areaCuarado+" cm2");
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo");
const ladoTriangulo1=10;
const ladoTriangulo2=12;
const baseTriangulo=14;
const alturaTriangulo=15;

console.log("Lado 1 del triangulo: "+ladoTriangulo1+" cm");
console.log("Lado 2 del triangulo: "+ladoTriangulo2+" cm");
console.log("Base del triangulo: "+baseTriangulo+" cm");
console.log("Altura del triangulo: "+alturaTriangulo+" cm");

const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("Perimetro del triangulo: "+perimetroTriangulo+" cm");

const areaTriangulo=baseTriangulo*alturaTriangulo/2;
console.log("Area del triangulo: "+areaTriangulo+" cm2");
console.groupEnd();

// Codigo del Ciruclo
console.group("Circulo");
const radioCirculo=5;
console.log("Radio del circulo: "+radioCirculo+" cm");

const perimetroCirculo=2*Math.PI*radioCirculo;
console.log("Perimetro del circulo: "+perimetroCirculo+" cm");

const areaCirculo=Math.PI*radioCirculo*radioCirculo;
console.log("Area del circulo: "+areaCirculo+" cm2");

console.groupEnd();




