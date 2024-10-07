// • Almacene en un arreglo de tamaño N los números ingresados
// por el usuario
// • La dimensión N también es ingresada por el usuario
// • Muestre los números del arreglo pero del último al primero

import * as fs from 'readline-sync';

let tamaño: number= 0;

do{
    tamaño = fs.questionInt("ingrese el numero del tamaño del arreglo (TIENE QUE SER OBLIGATORIAMENTE MAYOR A 0 CERO): ");

}while(tamaño <= 0);

let index: number = tamaño - 1;

let array: number[]= new Array (tamaño);

for(let i: number = 0; i < tamaño; i++){ 
        array[i] = fs.questionInt( `Ingrese el numero que ira en la posicion ${i} del arreglo: `);

}

function imprimirArrayInvertido(array: number[], index: number): void{

    console.log(`El arreglo que ingreso en su forma invertida es: `);
    for(let i: number = index; i >= 0; i--){
        console.log(array[i]);
    }

}

imprimirArrayInvertido(array, index);