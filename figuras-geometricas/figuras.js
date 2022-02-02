// codigo del cuadrado

/* const perimetroCuadrado = ladoCuadrado * 4;*/
function perimetroCuadrado(lado) {
    return lado * 4; 
}

/* const areaCuadrado = ladoCuadrado * ladoCuadrado; */
function areaCuadrado(lado) {
    return lado * lado;
}


//codigo del triangulo

/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; */
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

/* const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; */
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


//codigo del circulo

//Radio

//Diámetro
/* const diametroCirculo = radioCirculo * 2; */
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
/* const perimetroCirculo = diametroCirculo * PI; */
function perimetroCirculo(radio) {
    const perimetro = diametroCirculo(radio);
    return perimetro * PI;
}

//Área
/* const areaCirculo = (radioCirculo * radioCirculo) * PI;*/
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
    
}