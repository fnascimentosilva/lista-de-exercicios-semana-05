const idade = prompt("Informe aqui a sua idade: ")

function classificarIdade(){
    if(idade <= 15){
        alert("Pessoa Jovem");
    }else if(idade <= 64){
        alert("Pessoa Adulta");
    }else{
        alert("Pessoa Idosa");
    }
}

classificarIdade()