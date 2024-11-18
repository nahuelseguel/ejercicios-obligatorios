import * as helper from './helper'

let array: number[] = helper.crearArregloNumerico(10);

function bubbleSort(array: number[]): void{
    
    console.log("Arreglo desordenado: ")
    helper.cargarArreglo(array, 10, 100);
    helper.imprimirArreglo(array);

    console.log("-----------------------------------------");

    console.log("Arreglo ordenado con metodo de burbujeo: ")
    helper.ordenamientoBubbleInvert(array)
    helper.imprimirArreglo(array);
}

bubbleSort(array);
