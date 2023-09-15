"use strict";
const result = document.getElementById("resultadoMatriz");
const operarButton = document.getElementById("operarMat");
const crearMatB = document.getElementById("crearMatriz");
const storedMat = localStorage.getItem("matInfo");
const notification = document.getElementById('notification');
const optindex = document.getElementById("opciones");
let operacionN = 10;
let filasN = 0;
let columnasN = 0;
function operation(opIndex, filas, columnas) {
    filasN = filas;
    columnasN = columnas;
    operacionN = opIndex;
}
function initializeMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = 0; // Initialize with zeros; you can change this as needed
        }
    }
    return matrix;
}
function initializeVector(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = 0;
    }
    return matrix;
}
crearMatB === null || crearMatB === void 0 ? void 0 : crearMatB.addEventListener("click", () => {
    if (crearMatB.textContent === "Crear matriz") {
        crearMatB.textContent = "Modificar matriz";
    }
    else {
        showNotification('Modified', 1000);
    }
});
operarButton.addEventListener("click", () => {
    if (operacionN >= 0 || operacionN <= 2) {
        operacionN = optindex.selectedIndex;
    }
    switch (operacionN) {
        case 0:
            resultOPt.style.display = "block";
            imprimirMat(sumarMat(filasN, columnasN));
            break;
        case 1:
            resultOPt.style.display = "block";
            imprimirMat(restarMat(filasN, columnasN));
            break;
        case 2:
            resultOPt.style.display = "block";
            imprimirMat(multMat(filasN, columnasN));
            break;
        case 3:
            resultOPt.style.display = "block";
            imprimirMat(multVec(filasN, columnasN));
            break;
        case 4:
            resultOPt.style.display = "block";
            imprimirVec(sumarCol(filasN, columnasN));
            break;
    }
});
function imprimirMat(matR) {
    const matrixResultDiv = document.getElementById("resultadoMatriz");
    matrixResultDiv.innerHTML = "";
    const resultT = document.createElement("h2");
    resultT.classList.add("resultText");
    resultT.textContent = "Resultado:";
    const table = document.createElement("table");
    table.classList.add("resultTable");
    for (let i = 0; i < matR.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < matR[i].length; j++) {
            const cell = document.createElement("td");
            cell.textContent = matR[i][j].toString();
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    matrixResultDiv.appendChild(resultT);
    matrixResultDiv.appendChild(table);
}
function imprimirVec(matR) {
    const matrixResultDiv = document.getElementById("resultadoMatriz");
    matrixResultDiv.innerHTML = "";
    const resultT = document.createElement("h2");
    resultT.classList.add("resultText");
    resultT.textContent = "Resultado:";
    const table = document.createElement("table");
    table.classList.add("resultTable");
    for (let i = 0; i < matR.length; i++) {
        const cell = document.createElement("td");
        cell.textContent = matR[i].toString();
        table.appendChild(cell);
    }
    matrixResultDiv.appendChild(resultT);
    matrixResultDiv.appendChild(table);
}
function sumarMat(fil, col) {
    let matA = initializeMatrix(fil, col);
    let matB = initializeMatrix(fil, col);
    let matR = initializeMatrix(fil, col);
    for (let i = 0; i < fil; i++) {
        for (let j = 0; j < col; j++) {
            const inputA = document.getElementById(`matrizA_${i}_${j}`);
            const inputB = document.getElementById(`matrizB_${i}_${j}`);
            // Convert input values to numbers
            let valueA = parseFloat(inputA.value);
            let valueB = parseFloat(inputB.value);
            if (isNaN(valueA) || isNaN(valueB)) {
                valueA = 0;
                valueB = 0;
            }
            matA[i][j] = valueA;
            matB[i][j] = valueB;
            matR[i][j] = valueA + valueB;
        }
    }
    saveData(fil, col, matA, matB);
    return matR;
}
function restarMat(fil, col) {
    let matA = initializeMatrix(fil, col);
    let matB = initializeMatrix(fil, col);
    let matR = initializeMatrix(fil, col);
    for (let i = 0; i < fil; i++) {
        for (let j = 0; j < col; j++) {
            const inputA = document.getElementById(`matrizA_${i}_${j}`);
            const inputB = document.getElementById(`matrizB_${i}_${j}`);
            let valueA = parseFloat(inputA.value);
            let valueB = parseFloat(inputB.value);
            if (isNaN(valueA) || isNaN(valueB)) {
                valueA = 0;
                valueB = 0;
            }
            matA[i][j] = valueA;
            matB[i][j] = valueB;
            matR[i][j] = valueA - valueB;
        }
    }
    saveData(fil, col, matA, matB);
    return matR;
}
function multMat(fil, col) {
    let matA = initializeMatrix(fil, col);
    let matB = initializeMatrix(fil, col);
    let matR = initializeMatrix(fil, col);
    for (let i = 0; i < fil; i++) {
        for (let j = 0; j < col; j++) {
            const inputA = document.getElementById(`matrizA_${i}_${j}`);
            const inputB = document.getElementById(`matrizB_${i}_${j}`);
            let valueA = parseFloat(inputA.value);
            let valueB = parseFloat(inputB.value);
            if (isNaN(valueA) || isNaN(valueB)) {
                valueA = 0;
                valueB = 0;
            }
            matA[i][j] = valueA;
            matB[i][j] = valueB;
            matR[i][j] = valueA * valueB;
        }
    }
    saveData(fil, col, matA, matB);
    return matR;
}
function multVec(fil, col) {
    let matA = initializeVector(fil, col);
    let matB = initializeMatrix(fil, col);
    let matR = initializeMatrix(fil, col);
    for (let i = 0; i < fil; i++) {
        const inputA = document.getElementById(`matrizA_${i}_${0}`);
        for (let j = 0; j < col; j++) {
            const inputB = document.getElementById(`matrizB_${i}_${j}`);
            let valueA = parseFloat(inputA.value);
            let valueB = parseFloat(inputB.value);
            if (isNaN(valueA) || isNaN(valueB)) {
                valueA = 0;
                valueB = 0;
            }
            matA[i] = valueA;
            matB[i][j] = valueB;
            matR[i][j] = valueA * valueB;
        }
    }
    saveDataV(fil, col, matA, matB);
    return matR;
}
function sumarCol(fil, col) {
    let matA = initializeMatrix(fil, col);
    let matR = initializeVector(fil, col);
    for (let i = 0; i < fil; i++) {
        for (let j = 0; j < col; j++) {
            const inputA = document.getElementById(`matrizA_${j}_${i}`);
            let valueA = parseFloat(inputA.value);
            if (isNaN(valueA)) {
                valueA = 0;
            }
            matA[i][j] = valueA;
            matR[i] += valueA;
        }
    }
    saveData(fil, col, matA, initializeMatrix(fil, col));
    return matR;
}
function showNotification(message, duration) {
    notification.textContent = message;
    notification.style.display = 'block';
    // Automatically hide the notification after the specified duration (in milliseconds)
    setTimeout(() => {
        notification.style.display = 'none';
    }, duration);
}
function saveData(fil, col, matA, matB) {
    const matricesData = {
        operacion: operacionN,
        filas: fil,
        columnas: col,
        MatrizA: matA,
        MatrizB: matB,
    };
    const jsonData = JSON.stringify(matricesData); //Se almacena el valor como string
    localStorage.setItem("matInfo", jsonData); //Se guarda como matInfo para usarlo después
}
function saveDataV(fil, col, matA, matB) {
    const matricesData = {
        operacion: operacionN,
        filas: fil,
        columnas: col,
        MatrizA: matA,
        MatrizB: matB,
    };
    const jsonData = JSON.stringify(matricesData);
    localStorage.setItem("matInfo", jsonData);
}
