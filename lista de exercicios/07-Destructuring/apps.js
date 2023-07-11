//Destructuring

const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  };


  function montaMensagem(dadosPessoa){
    const {nome, idade, profissao} = pessoa

    console.log(`Esta é ${nome}, tem ${idade} e é ${profissao}`);
  }
  

  montaMensagem(pessoa)

