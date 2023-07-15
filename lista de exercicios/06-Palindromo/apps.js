//Palindromo

/* Um palindrome (palíndromo), segundo o dicionário Houaiss,
"diz-se de frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa", como por exemplo: osso, Ana, radar.

Ou seja, é uma palavra que quando lida de trás pra frente tem o mesmo significado.

Implemente uma função em JavaScript que receba uma string como parâmetro e retorne se determinada palavra é um palindromo ou não. */

const fraseOuPalavra = "depois";



function verificaPalindromo(fraseOuPalavra){
  const fraseMinuscula = fraseOuPalavra.toLowerCase()

  const fraseSemEspacos = fraseMinuscula.replace(/\s/g, '')
  
  const separarFraseEmArray = fraseSemEspacos.split('')
  
  const inverterPalavra = separarFraseEmArray.reverse()
  
  const juntarFrase = inverterPalavra.join('')
  
  if(fraseOuPalavra === juntarFrase){
    console.log("É um palíndromo");
  }else{
    console.log("Não é um palíndromo");
  }
}

verificaPalindromo(fraseOuPalavra)

