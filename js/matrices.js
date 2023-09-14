"use strict";
const crearButton = document.getElementById("crearMatriz");
const matrizB_index = document.querySelector(".matB");
const resultOPt = document.getElementById("resultadoMatriz");
const matrices = document.querySelector(".mat");
crearButton.addEventListener("click", () => {
    const optindex = document.getElementById("opciones");
    const opcionesIndex = optindex.selectedIndex;
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
    operation(opcionesIndex, filas, columnas);
    console.log(opcionesIndex);
    switch (opcionesIndex) {
        case 0:
        case 1:
        case 2:
            crearMatriz1(filas, columnas, initializeMatrix(filas, columnas), initializeMatrix(filas, columnas));
            break;
        case 3:
            crearMatriz2(filas, columnas, initializeVector(filas, columnas), initializeMatrix(filas, columnas));
            break;
        case 4:
            crearMatriz3(filas, columnas, initializeMatrix(filas, columnas));
            break;
    }
    matrices.style.display = "block";
});
function crearMatriz1(filas, columnas, matA, matB) {
    const matrizA = document.getElementById("matrizA");
    const matrizB = document.getElementById("matrizB");
    matrizA.innerHTML = "";
    matrizB.innerHTML = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            const inputA = document.createElement("input");
            inputA.type = "text";
            inputA.name = `matrizA[${i}][${j}]`;
            inputA.id = `matrizA_${i}_${j}`;
            inputA.placeholder = "0";
            inputA.value = matA[i][j] === 0 ? "" : matA[i][j].toString(); //I assign an empty string if it's 0
            inputA.style.width = "40px";
            inputA.style.height = "20px";
            inputA.classList.add("center-input");
            matrizA.appendChild(inputA);
            const inputB = document.createElement("input");
            inputB.type = "text";
            inputB.name = `matrizB[${i}][${j}]`;
            inputB.id = `matrizB_${i}_${j}`;
            inputB.placeholder = "0";
            inputB.value = matB[i][j] === 0 ? "" : matB[i][j].toString(); //I assign an empty string if it's 0
            inputB.style.width = "40px";
            inputB.style.height = "20px";
            inputB.classList.add("center-input");
            matrizB.appendChild(inputB);
        }
        matrizA.appendChild(document.createElement("br"));
        matrizB.appendChild(document.createElement("br"));
    }
    matrizB_index.style.display = "block";
    resultOPt.style.display = "none";
}
function crearMatriz2(filas, columnas, matA, matB) {
    const matrizA = document.getElementById("matrizA");
    const matrizB = document.getElementById("matrizB");
    matrizA.innerHTML = "";
    matrizB.innerHTML = "";
    for (let i = 0; i < filas; i++) {
        // Agregar una sola columna en A con el mismo número de filas que B
        const inputA = document.createElement("input");
        inputA.type = "text";
        inputA.name = `matrizA[${i}][0]`;
        inputA.id = `matrizA_${i}_0`;
        inputA.placeholder = "0";
        inputA.value = matA[i] === 0 ? "" : matA[i].toString(); //I assign an empty string if it's 0
        inputA.style.width = "40px";
        inputA.style.height = "20px";
        inputA.classList.add("center-input");
        matrizA.appendChild(inputA);
        // Generar una matriz en B
        for (let j = 0; j < columnas; j++) {
            const inputB = document.createElement("input");
            inputB.type = "text";
            inputB.name = `matrizB[${i}][${j}]`;
            inputB.id = `matrizB_${i}_${j}`;
            inputB.placeholder = "0";
            inputB.value = matB[i][j] === 0 ? "" : matB[i][j].toString(); //I assign an empty string if it's 0
            inputB.style.width = "40px";
            inputB.style.height = "20px";
            inputB.classList.add("center-input");
            matrizB.appendChild(inputB);
        }
        matrizA.appendChild(document.createElement("br"));
        matrizB.appendChild(document.createElement("br"));
    }
    matrizB_index.style.display = "block";
    resultOPt.style.display = "none";
}
function crearMatriz3(filas, columnas, matA) {
    const matrizA = document.getElementById("matrizA");
    matrizA.innerHTML = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            const inputA = document.createElement("input");
            inputA.type = "text";
            inputA.name = `matrizA[${i}][${j}]`;
            inputA.id = `matrizA_${i}_${j}`;
            inputA.placeholder = "0";
            inputA.value = matA[i][j] === 0 ? "" : matA[i][j].toString(); //I assign an empty string if it's 0
            inputA.style.width = "50px";
            inputA.style.height = "30px";
            inputA.classList.add("center-input");
            matrizA.appendChild(inputA);
        }
        matrizA.appendChild(document.createElement("br"));
    }
    matrizB_index.style.display = "none";
    resultOPt.style.display = "none";
}
