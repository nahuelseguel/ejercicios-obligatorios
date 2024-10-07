// • Sumar los elementos de cada una de las posiciones
// de dos arreglos y guardar el resultado en otro arreglo
// • El arreglo tiene dimensión 6 y los números de los dos
// vectores los carga el usuario

import * as fs from 'readline-sync';

const tamaño: number = 6;

let array1: number[] = new Array (tamaño);

let array2: number[] = new Array (tamaño);

let arraySumas: number[] = [];

for (let i: number = 0; i < tamaño; i++){

    array1[i] = fs.questionInt("Ingrese los 6 numeros del primer arreglo: ");
}

for (let i: number = 0; i < tamaño; i++){

    array2[i] = fs.questionInt("Ingrese los 6 numeros del segundo arreglo: ");
}

function sumarArrays(array1: number[], array2: number[], arraySumas: number[], tamaño: number): void{
    
    for(let i: number = 0; i < tamaño; i++){
        let suma: number = array1[i] + array2[i];
        arraySumas[i] = suma;
    }
    
}

function imprimirArray(arraySumas: number[]): void{
    
    console.log("La suma de los numeros en las respectivas posiciones de los arrays es: ");
    for (let i: number = 0; i < tamaño; i++){
        console.log(arraySumas[i]);
    }  
}

sumarArrays(array1, array2, arraySumas, tamaño);
imprimirArray(arraySumas);


