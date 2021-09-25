console.group("cuadrados")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4
}

perimetroCuadrado(12)
// console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
  return lado * lado
}
// console.log("El area del cuadrado es " + areaCuadrado + "cm^2");

console.groupEnd()

console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, ladoBase) {
  return lado1 + lado2 + ladoBase;
}

function areaTriangulo(ladoBase, alturaTriangulo) {
  return (ladoBase * alturaTriangulo) / 2;

}
console.groupEnd();

console.group("Circulos")

function diametroCirculo(radio) {
  return radio * 2;
}


const PI = Math.PI;
console.log("PI es " + PI + "cm");

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

console.groupEnd()

//aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro)

  const area = areaCuadrado(value)
  alert(area)
}

//altura triangulo isosceles
function alturaIsosceles(lado1, lado2, base) {
  if (lado1 == lado2 && lado1 != base) {
    const altura = Math.sqrt(lado1 ** 2 - (base ** 2 / 4))
    console.log(altura)
  } else {
    alert("no es un triangulo isosceles")
  }
}
// altura(6, 5, 4)