/* 
Tienes un array con palabras y tienes que retornar un array ordenado de la palabra con menos caracteres a la palabra con más caracteres.

La solución debería funcionar algo similar:

solution([
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
]);

Output

[
    "Sol",
    "Hola",
    "Viajar",
    "Aprender"
]
*/
const arrTest = [
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
]

function solution(array) {
    // Tu código aquí 👈 
    return array.sort((preItem, postItem) => preItem.length - postItem.length)
}; 

console.log(solution(arrTest))