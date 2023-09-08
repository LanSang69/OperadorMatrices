const result = document.getElementById("resultadoMatriz") as HTMLElement;
let operacionN: number = 10;
let filasN: number = 0;
let columnasN: number = 0;

const operarButton = document.getElementById("operarMat") as HTMLButtonElement;

let matA: number[][];
let matB: number[][];

function operation(opIndex: number, filas: number, columnas: number) {
  operacionN = opIndex;
  filasN = filas;
  columnasN = columnas;
}

function initializeMatrix(rows: number, columns: number): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = 0; // Initialize with zeros; you can change this as needed
    }
  }
  return matrix;
}

function initializeVector(rows: number, columns: number): number[] {
  const matrix: number[] = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = 0;
  }
  return matrix;
}

operarButton.addEventListener("click", () => {
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

function imprimirMat(matR: number[][]) {
  const matrixResultDiv = document.getElementById("resultadoMatriz") as HTMLElement;
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

function imprimirVec(matR: number[]) {
  const matrixResultDiv = document.getElementById("resultadoMatriz") as HTMLElement;
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

function sumarMat(fil: number, col: number) {
  let matR: number[][] = initializeMatrix(fil, col);

  for (let i = 0; i < fil; i++) {
    for (let j = 0; j < col; j++) {
      const inputA = document.getElementById(`matrizA_${i}_${j}`) as HTMLInputElement;
      const inputB = document.getElementById(`matrizB_${i}_${j}`) as HTMLInputElement;

      // Convert input values to numbers
      let valueA = parseFloat(inputA.value);
      let valueB = parseFloat(inputB.value);

      if(isNaN(valueA) || isNaN(valueB)){
        valueA = 0;
        valueB = 0;
      }

      // Perform the addition
      matR[i][j] = valueA + valueB;
    }
  }

  return matR;
}


function restarMat(fil: number, col: number) {
  let matR: number[][] = initializeMatrix(fil, col);

  for (let i = 0; i < fil; i++) {
    for (let j = 0; j < col; j++) {
      const inputA = document.getElementById(`matrizA_${i}_${j}`) as HTMLInputElement;
      const inputB = document.getElementById(`matrizB_${i}_${j}`) as HTMLInputElement;

      let valueA = parseFloat(inputA.value);
      let valueB = parseFloat(inputB.value);

      if(isNaN(valueA) || isNaN(valueB)){
        valueA = 0;
        valueB = 0;
      }

      // Perform the addition
      matR[i][j] = valueA - valueB;
    }
  }

  return matR;
}

function multMat(fil: number, col: number) {
  let matR: number[][] = initializeMatrix(fil, col);

  for (let i = 0; i < fil; i++) {
    for (let j = 0; j < col; j++) {
      const inputA = document.getElementById(`matrizA_${i}_${j}`) as HTMLInputElement;
      const inputB = document.getElementById(`matrizB_${i}_${j}`) as HTMLInputElement;

      let valueA = parseFloat(inputA.value);
      let valueB = parseFloat(inputB.value);

      if(isNaN(valueA) || isNaN(valueB)){
        valueA = 0;
        valueB = 0;
      }

      // Perform the addition
      matR[i][j] = valueA * valueB;
    }
  }

  return matR;
}

function multVec(fil: number, col: number) {
  let matR: number[][] = initializeMatrix(fil, col);

  for (let i = 0; i < fil; i++) {
    const inputA = document.getElementById(`matrizA_${i}_${0}`) as HTMLInputElement;
    for (let j = 0; j < col; j++) {
      const inputB = document.getElementById(`matrizB_${i}_${j}`) as HTMLInputElement;

      let valueA = parseFloat(inputA.value);
      let valueB = parseFloat(inputB.value);

      if(isNaN(valueA) || isNaN(valueB)){
        valueA = 0;
        valueB = 0;
      }

      // Perform the addition
      matR[i][j] = valueA * valueB;
    }
  }

  return matR;
}

function sumarCol(fil: number, col: number) {
  let matR: number[] = initializeVector(fil, col);

  for (let i = 0; i < fil; i++) {
    for (let j = 0; j < col; j++) {
      const inputA = document.getElementById(`matrizA_${j}_${i}`) as HTMLInputElement;

      let valueA = parseFloat(inputA.value);

      if(isNaN(valueA)){
        valueA = 0;
      }

      // Perform the addition
      matR[i] += valueA;
    }
  }

  return matR;
}