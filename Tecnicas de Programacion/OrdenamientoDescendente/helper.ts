export function crearArregloNumerico(len: number): number[] {
    let arr: number[] = new Array(len);
    return arr;
}

function numRandom(numRndom: number){
    return Math.floor(Math.random() * numRndom);
}

export function cargarArreglo(arr: number[], len: number, numRndom: number): void{
    for(let i: number = 0; i <len; i++){
        arr[i] = numRandom(numRndom);
    }
}

function esMayor(num1: number, num2: number): boolean {
    return num1 > num2
}

function intercambiar(arreglo: number[], pos1: number, pos2: number): void {
    const aux: number = arreglo[pos1];
    arreglo[pos1] = arreglo[pos2];
    arreglo[pos2] = aux;
}

export function ordenamientoBubbleInvert(arr: number[]): void{
    let i: number, j: number;
    let len: number = arr.length;
    for(i = len - 2; i > 0; i--){
        for(j = len - 1; j > 0; j--){
            if(esMayor(arr[j], arr[j - 1])){
                intercambiar(arr, j, j - 1);
            }
        }
    }
}

export function imprimirArreglo(arr: number[]): void {
    let array: string = '';
    for (let i = 0; i < arr.length; i++) {
        array += `${arr[i]} `
    }
    console.log(array);
}
