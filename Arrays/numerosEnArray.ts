// • Almacene en un arreglo de dimensión N números (la
//   cantidad es ingresada por el usuario)
// • Muestre cuántos números son positivos, cuántos son
//   negativos y cuántos ceros hay

import * as fs from 'readline-sync';

let tamaño: number= 0;

let array: number[] = new Array(tamaño);

let contadorPositivos: number = 0;

let contadorNegativos: number = 0;

let contadorCeros: number = 0;

do{
    tamaño = fs.questionInt("ingrese el numero del tamaño del arreglo (TIENE QUE SER OBLIGATORIAMENTE MAYOR A 0 CERO): ");

}while(tamaño <= 0);

for(let i: number = 0; i < tamaño; i++){ 
    array[i] = fs.questionInt( `Ingrese el numero que ira en la posicion ${i} del arreglo: `);
    if(array[i] > 0){
        contadorPositivos += 1;
    }
    if(array[i] < 0){
        contadorNegativos += 1;
    }
    if(array[i] === 0){
        contadorCeros += 1;
    }

}

function imprimirCantidad(contadorPositivos: number, contadorNegativos: number, contadorCeros: number){
    console.log(`La cantidad de numeros positivos en el arreglo es: ${contadorPositivos}`);
    console.log(`La cantidad de numeros negativos en el arreglo es: ${contadorNegativos}`);
    console.log(`La cantidad de 0 (ceros) en el arreglo es: ${contadorCeros}`);
}

imprimirCantidad(contadorPositivos, contadorNegativos, contadorCeros);