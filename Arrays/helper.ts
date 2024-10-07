import * as fs from 'readline-sync';

export function cargarArray(array: number[]): void{
    let long: number = array.length;
    for(let i: number = 0; i < long; i++){
        array[i] = fs.questionInt(`Ingrese el numerode la posicion ${i} del arreglo`);
    }
}