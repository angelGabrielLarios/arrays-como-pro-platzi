/* 

En este desafío tienes un array de números y tienes que agregar una nueva propiedad al final del array ¿Sencillo? Pero debes tener en cuenta que no puedes cambiar el array original.

Un ejemplo sería enviar el array [1, 2, 3] y agregar el número 4, esto me debería retornar [1, 2, 3, 4] pero el array enviando no debe ser modificado, es decir debe mantenerse con su estado original de [1, 2, 3].

Input

solution([1, 2, 3], 4);
solution(["A", "B"], "C");

Output
[1, 2, 3, 4]
["A", "B", "C"]
*/

function solution(array, newElement) {
    const cloneArray = JSON.parse(JSON.stringify(array));
    cloneArray.push(newElement);
    return cloneArray;
}; 
console.log(solution([1, 2, 3], 4));
console.log(solution(["A", "B"], "C"));