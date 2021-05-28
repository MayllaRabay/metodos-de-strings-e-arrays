//Exemplo de input
const nomeArquivo = 'Foto da Familia.pdf';

//Seu código aqui
function verificarFormato(string) {
    const indexPonto = nomeArquivo.indexOf(".");
    const formato = nomeArquivo.slice(indexPonto + 1, nomeArquivo.length);
    
    if(formato === "jpg" || formato === "jpeg" || formato ==="gif" || formato ==="png") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    };
}

verificarFormato(nomeArquivo);
