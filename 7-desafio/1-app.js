/* 
En este desafío tienes un array con una lista de strings que representan el nombre y apellido de varios usuarios, el reto es retornar ese array ordenado alfabéticamente por el apellido.
La solución debería tener un input y output como los siguientes:

Input:
solution([
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Juan Amador"
]);
Output:
[
    "Juan Amador",
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente"
]
*/
const arrTest = [
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Juan Amador"
];
function solution(array) {
    // Tu código aquí 👈 
    return array
    .sort((prePersona, postPersona) => {

        const apellidoPrePersona = prePersona.split(' ')[1]
        const apellidoPostPersona = postPersona.split(' ')[1]

        if(apellidoPrePersona < apellidoPostPersona ) {
            return -1;
        }

        if(apellidoPrePersona > apellidoPostPersona ) {
            return 1;
        }
        return 0;
    });
    
}; 

console.log(solution(arrTest));
/* 
console.log(arrTest[0].split(' ')[1]) 
*/