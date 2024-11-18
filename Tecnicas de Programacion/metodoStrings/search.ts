const paragraph: string =
  `Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. 
   Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? 
   ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen 
   de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. 
   A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en 
   la casa. Las cosas cambiaron después, claro. Cambiaron tanto.`;


//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
  return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
  //encuentro todas las veces que se repite  
  let regex = new RegExp(searchTerm, "g");
  //guardo todas las veces que se repite en un arreglo
    const cantidad: string[] | null = paragraph.match(regex);
    if(cantidad == null){
      return 0;
    }

    return cantidad.length;
}

isTextInPara(paragraph, "la");

let repit: number = howManyTextInPara(paragraph, "la");

console.log(`La palabra "la" se repite ${repit} veces en el texto`);

//RegExp: Un objeto de expresión regular es una herramienta que te permite buscar, validar, 
//reemplazar o extraer información de texto de manera eficiente usando patrones. Estos patrones se definen mediante una sintaxis especial 
//que te permite especificar exactamente qué texto estás buscando y bajo qué condiciones.