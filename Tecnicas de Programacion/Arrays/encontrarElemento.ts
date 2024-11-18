// - Crear un programa que encuentre cuál es el número
// más grande del arreglo e imprimirlo por consola
// - Almacenar el número más grande en una variable
// global y pasarlo a una función para determinar si el
// número es par o impar

let arrayNumber: number [] = [4,7,9,3,1,45,67,23,29,78,11,16];

let numMayor: number = 0;
let posMayor: number = 0;

for (let i: number = 0; i < arrayNumber.length; i++){
    
    let num: number = arrayNumber[i];
    if(num > numMayor){
        numMayor = num;
        posMayor = i;
    }

}

console.log(`El numero mayor es ${numMayor} y se encuentra en la posicion ${posMayor} del arreglo`);

function esParImpar(numMayor: number): boolean{
    let esPar: boolean = false;

    if (numMayor % 2 === 0){
        esPar = true;
        console.log("El numero mayor es par!");
    }
    else console.log("El numero mayor es impar");

    return esPar;
}


function ImprimirArray(arrayNumber: number[]): void{
    
    for (let i: number = 0; i < arrayNumber.length; i++){
        console.log(arrayNumber[i]);
    }  
}
ImprimirArray(arrayNumber);

esParImpar(numMayor);
