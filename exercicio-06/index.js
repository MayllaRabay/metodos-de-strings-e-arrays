//Exemplo de input
const cpf = "011.022.033-44";
const cnpj = "12.345.678/0001-99";

//Seu código aqui
function documentoFormatado(string) {
    console.log(string.replace(/[\D]/g, ""));
}

documentoFormatado(cpf);
documentoFormatado(cnpj);
