//Exemplo de input
const nome = 'Guido Cerqueira';

//Seu código aqui
function criarApelido(string) {
    const nomeEmArray = (string.toLowerCase()).split(" ");
    
    nomeEmArray.unshift("@");
    
    const nomeFormatado = nomeEmArray.join("");
    
    console.log(nomeFormatado.substr(0, 13));
}

criarApelido(nome);
