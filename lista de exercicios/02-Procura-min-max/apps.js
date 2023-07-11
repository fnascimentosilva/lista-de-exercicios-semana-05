//Procurar minimo e maximo

const numeros = [20,10, 30];

function procuraMinMax(maiorMenor) {
 
    const maior = numeros.filter(function (item) {
      return item;
    });
    console.log(Math.max(...maior));
    console.log(Math.min(...maior));
  
}

procuraMinMax(numeros);
