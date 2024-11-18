import * as fs from 'readline-sync';

import { cargarArray } from './helper';

let longitud: number = fs.questionInt("Ingrese la longitud de los arreglos: ");

let arr1: number [] = new Array(longitud);

let arr2: number [] = new Array(longitud);


function productoArray(arr1: number[], arr2: number[], longitud: number): number{
    let producto: number = 0;
    for(let i: number = 0; i < longitud; i++){
        producto = producto + (arr1[i] * arr2[i]);
    }
    return producto;
}

console.log(`${productoArray}`);


cargarArray(arr1);
cargarArray(arr2);