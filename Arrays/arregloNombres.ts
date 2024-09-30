import * as fs from 'readline-sync'; 

let ArrayNames: string [] = ["Lucas", "Iara", "Hector", "Mariano", "Dante"];

let name: string = fs.question("Ingrese un nombre: ");

let esta: boolean = false;

for (let i: number = 0; i < ArrayNames.length; i++){
    if(name === ArrayNames[i]){
        esta = true;
        console.log("El nombre esta en la posicion " + i + " del arrglo");       
    }
}
if (!esta){
    console.log("El nombre no se encuentra en el arreglo.");
}

function ImprimirArray(ArrayNames: string[]): void{
    
    for (let i: number = 0; i < ArrayNames.length; i++){
        console.log(ArrayNames[i]);
    }  
}
ImprimirArray(ArrayNames);

