const previousE = document.querySelector(".previousState") as HTMLElement;
const inputMat = document.querySelector(".inputsIniciales") as HTMLElement;
const yesB = document.getElementById("si") as HTMLButtonElement;
const notB = document.getElementById("no") as HTMLButtonElement;
const matricesList = document.querySelector(".mat") as HTMLElement;
const resultOperar = document.getElementById("resultadoMatriz") as HTMLElement;
const inputFil = document.getElementById("filas") as HTMLInputElement;
const inputCol = document.getElementById("columnas") as HTMLInputElement;

notB!.addEventListener('click', () => {   //I return to the initial state where the user selects both rows and columns
    previousE!.style.display = "none";
    inputMat!.style.display = "block";
});

yesB!.addEventListener('click', () => {   //I generate automatically the inputs for matA and/or matB
    const storedMat = localStorage.getItem('matInfo');

    if (storedMat) {
        const transformMat = JSON.parse(storedMat);

        inputFil.value = transformMat.filas;
        inputCol.value = transformMat.columnas;
        optindex.selectedIndex = transformMat.operacion;
        
        operation(transformMat.operacion, transformMat.filas, transformMat.columnas);

        previousE.style.display = "none";
        inputMat.style.display = "block"

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