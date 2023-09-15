"use strict";
const previousE = document.querySelector(".previousState");
const inputMat = document.querySelector(".inputsIniciales");
const yesB = document.getElementById("si");
const notB = document.getElementById("no");
const matricesList = document.querySelector(".mat");
const resultOperar = document.getElementById("resultadoMatriz");
const inputFil = document.getElementById("filas");
const inputCol = document.getElementById("columnas");
notB.addEventListener('click', () => {
    inputFil.value = "";
    inputCol.value = "";
    optindex.selectedIndex = 0;
    previousE.style.display = "none";
    inputMat.style.display = "block";
});
yesB.addEventListener('click', () => {
    const storedMat = localStorage.getItem('matInfo');
    if (storedMat) {
        const transformMat = JSON.parse(storedMat);
        inputFil.value = transformMat.filas;
        inputCol.value = transformMat.columnas;
        optindex.selectedIndex = transformMat.operacion;
        operation(transformMat.operacion, transformMat.filas, transformMat.columnas);
        previousE.style.display = "none";
        inputMat.style.display = "block";
        switch (transformMat.operacion) {
            case 0:
            case 1:
            case 2:
                console.log(transformMat);
                crearMatriz1(transformMat.filas, transformMat.columnas, transformMat.MatrizA, transformMat.MatrizB);
                break;
            case 3:
                console.log(transformMat);
                crearMatriz2(transformMat.filas, transformMat.columnas, transformMat.MatrizA, transformMat.MatrizB);
                break;
            case 4:
                console.log(transformMat);
                crearMatriz3(transformMat.filas, transformMat.columnas, transformMat.MatrizA);
                break;
        }
        matricesList.style.display = "block";
    }
});
