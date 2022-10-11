/* 
En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

La solución debería tener un input y output como los siguientes:

Input

solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]);

Output

20
*/
const test = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];

function solution(lines) {
    // Tu código aquí 👈 
    let totalPalabras = 0
    for(const oracion of lines) {
        totalPalabras += oracion.split(' ').length
    }
    return totalPalabras
};
console.log(solution(test))

