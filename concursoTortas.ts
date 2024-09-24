// ### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

// Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y
// luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. 
// Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es
// el empate, solo basta con indicar que se produjo empate si al menos existe uno).

// ## Funciones a implementar:
// calcularPuntaje(sabor, presentacion, dificultad):
// Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

// determinarGanador():
// Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la
// función calcularPuntaje para determinar la torta con el mayor puntaje.

// *Si lo consideran necesario, pueden implementar funciones extra.

import * as fs from 'readline-sync';

const cantParticipantes: number = fs.questionInt("Ingrese la cantidad de participantes: ");
let puntSabor: number = 0;
let puntPresentacion: number = 0;
let puntDificultad: number = 0; 
let posicion: number = 0;
let comparacion: number = 0;
let contEmpates: number = 0;

for(let i: number = 1; i <= cantParticipantes; i++){
    do {
        console.log("EL PUNTAJE DEBE TENER UN RANGO ENTRE 1 Y 5 ");
        puntSabor = fs.questionInt("Puntaje de Sabor: ");
        puntPresentacion = fs.questionInt("Puntaje de Presentacion: ");
        puntDificultad = fs.questionInt("Puntaje de Dificultad: ");
    } while ((puntSabor < 1 || puntSabor > 5) || (puntDificultad < 1 || puntDificultad > 5) || (puntPresentacion < 1 || puntPresentacion > 5));

    let puntaje: number = calcularPuntaje(puntSabor, puntPresentacion, puntDificultad);

    if(puntaje > comparacion){
        comparacion = puntaje;
        posicion = i;
        contEmpates = 0;
    } else if (puntaje === comparacion){
        contEmpates += 1;
    }
}
if(contEmpates != 0){
    console.log(`Hubo ${contEmpates} empates`);
    
}else console.log(`El ganador del concurso es el aprticipante N° ${posicion} con un puntaje de ${comparacion}`);

function calcularPuntaje(puntSabor: number, puntPresentacion: number, puntDificultad: number, ): number{

    const puntTotal: number = puntSabor + puntPresentacion + puntDificultad;
    return puntTotal;
}
