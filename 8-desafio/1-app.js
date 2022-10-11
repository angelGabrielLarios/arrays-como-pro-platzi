/* 
En este desafío tienes un array de números positivos y negativos, tu reto es retornar un array ordenado de menor a mayor y dejando los valores sin que se repitan números.

La solución debería tener un input y output como los siguientes:

Input

solution([1, 2, -3, -1, 2, 4, 4, 1, 45, -1]);

Output

[ -3, -1, 1, 2, 4, 45 ]
*/


const arrTest = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];
function solution(array) {
    // Tu código aquí 👈 
    /* return [...new Set(array)].sort((a, b) => a - b); */

    const ordenado = array.sort((a, b) => a - b)
    const res = []
    for(const numero of ordenado) {
        if(!res.includes(numero)) {
            res.push(numero)
        }
    }
    return res
    
}; 

console.log(solution(arrTest));