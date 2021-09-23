console.group("cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado +"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado +"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado +"cm^2");

console.groupEnd()

console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden "
+ ladoTriangulo1
+ "cm, " + ladoTriangulo2
+ "cm, " + baseTriangulo
+ "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El area del triangulo es " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es " + areaTriangulo + "cm^2");
console.groupEnd();

console.group("Circulos")

const radioCirculo = 4;
console.log("el radio del circulo es " + radioCirculo + "cm");

const diametroCirculo = 8;
console.log("el diametro del circulo es " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es " + PI + "cm");

const perimetroCirculo = diametroCirculo * PI;
console.log("El diametro del Circulo es " + perimetroCirculo + "cm");


const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log("El area del Circulo es " + areaCirculo + "cm^2");

console.groupEnd()