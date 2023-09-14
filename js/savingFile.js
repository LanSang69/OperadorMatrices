"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDataVToFile = exports.saveDataToFile = void 0;
function saveDataToFile(fil, col, matA, matB) {
    const matricesData = {
        operacion: operacionN,
        filas: fil,
        columnas: col,
        MatrizA: matA,
        MatrizB: matB,
    };
    const jsonData = JSON.stringify(matricesData);
    // Specify the file path where you want to save the data
    const filePath = './dataFile/matrices.json';
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
        else {
            console.log('Data saved to file successfully');
        }
    });
}
exports.saveDataToFile = saveDataToFile;
function saveDataVToFile(fil, col, matA, matB) {
    const matricesData = {
        operacion: operacionN,
        filas: fil,
        columnas: col,
        MatrizA: matA,
        MatrizB: matB,
    };
    const jsonData = JSON.stringify(matricesData);
    // Specify the file path where you want to save the data
    const filePath = './dataFile/matrices.json';
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
        else {
            console.log('Data saved to file successfully');
        }
    });
}
exports.saveDataVToFile = saveDataVToFile;
const myModule = {
    saveDataToFile,
    saveDataVToFile,
};
// Export the entire object for use in other parts of your application
exports.default = myModule;
