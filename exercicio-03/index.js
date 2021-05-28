//Exemplo de input
const texto = "Aprenda programar do zero na Cubos Academy";

//Seu código aqui
function urlAmigavel(string) {
    const todasLetrasMinusculas = string.toLowerCase();
    const arrayDePalavras = todasLetrasMinusculas.split(" ");
    console.log(arrayDePalavras.join("-"));
}

urlAmigavel(texto);
