//Exemplo de input
const comentario = "Esse COVID é muito perigoso!";

//Seu código aqui
function filtroDePalavras(string) {
    const todasletrasMinusculas = string.toLowerCase();

    if(todasletrasMinusculas.includes("covid") || todasletrasMinusculas.includes("pandemia")) {
        console.log("Comentário bloqueado por conter palavras proibidas.")
    } else {
        console.log("Comentário autorizado.")
    };
}

filtroDePalavras(comentario);

