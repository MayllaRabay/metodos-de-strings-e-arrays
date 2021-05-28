//Exemplo de input
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

//Seu código aqui
function tresCarros(array, number) {
    const arrayDeTresCarros = array.slice(number, number + 3);
    const stringDeTresCarros = arrayDeTresCarros.join(" - ");
    
    console.log(stringDeTresCarros);
}

tresCarros(nomes, posicao);
