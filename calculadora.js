
function soma() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const somaTotal = num1 + num2;

    
    console.log("Resultado da soma:", somaTotal);
    document.getElementById("resultado").innerText = "Resultado: " + somaTotal;
}

document.getElementById("somar").addEventListener("click", soma);
  
function subtrair() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const resultado = num1 - num2;

    console.log("Resultado da subtração:", resultado);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

document.getElementById("subtrair").addEventListener("click", subtrair);

function multiplicar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const resultado = num1 * num2;

    console.log("Resultado da multiplicação:", resultado);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

document.getElementById("multiplicar").addEventListener("click", multiplicar);

function dividir() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const resultado = num1 / num2;

    console.log("Resultado da divisão:", resultado);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

document.getElementById("dividir").addEventListener("click", dividir);