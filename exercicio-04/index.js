//Exemplo de input
let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

//Seu código aqui
if(identificador.length < 6) {
    const identificadorFormatado = identificador.padStart(6, "0");
    console.log(identificadorFormatado);
} else if(identificador.length = 6) {
    console.log(identificador);
} else {
    console.log("Identificador inválido");
};

const nomeEmArray = nome.split(" ");

let nomeFormatado = [];

for(nome of nomeEmArray) {
    const primeiraLetra = nome[0].toUpperCase();
    const restoDasLetras = nome.slice(1);
    nomeFormatado.push(primeiraLetra + restoDasLetras);
}

console.log(nomeFormatado.join(" "));

const emailFormatado = email.trim();
console.log(emailFormatado);

const tagFormatada = tags.join(", ");
console.log(tagFormatada);
