/*Para treinar os conceitos de rest e array methods.

Crie dois arquivos:

index.html

app.js

No arquivo apps.js, utilizando o operador Rest, crie uma função que receba como parâmetro uma quantidade indefinida de variáveis inteiras (números inteiros).

A função deve retornar a soma de todos os parâmetros (...).
Após executada a função, o resultado deve ser exibido no console.*/
const resultado = somaTudo(1, 2, 3, 4);


function somaTudo(a, ...soma){
     soma.map(somaValores => a += somaValores)
     return a;
}

console.log(resultado);
