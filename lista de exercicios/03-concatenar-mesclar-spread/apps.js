//Cocatenação de Vetores com Spread

let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];

concatVetores = [...arrayA, ...arrayB];

console.log(concatVetores);


//Concatenação de Obejtos com Spread

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

function mesclaObjetos(objUm, objDois){
    return novoObjeto = {...objUm, ...objDois}
}

console.log(mesclaObjetos(objUm,objDois));