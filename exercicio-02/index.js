//Exemplo de input
const cpf = "12345678900";
const cnpj = "12345678900";

//Seu código aqui
if(cpf.length != 11) {
    console.log("CPF Inválido")
} else {
    const cpfTexto = cpf.toString();
    cpfParte1 = cpfTexto.substr(0,3);
    cpfParte2 = cpfTexto.substr(3,3);
    cpfParte3 = cpfTexto.substr(6,3);
    cpfParte4 = cpfTexto.substr(9);

    console.log(`${cpfParte1}.${cpfParte2}.${cpfParte3}-${cpfParte4}`);
};

if(cnpj.length != 14) {
    console.log("CNPJ Inválido")
} else {
    const cnpjTexto = cnpj.toString();
    cnpjParte1 = cnpjTexto.substr(0,2);
    cnpjParte2 = cnpjTexto.substr(2,3);
    cnpjParte3 = cnpjTexto.substr(5,3);
    cnpjParte4 = cnpjTexto.substr(8,4);
    cnpjParte5 = cnpjTexto.substr(12);

    console.log(`${cnpjParte1}.${cnpjParte2}.${cnpjParte3}/${cnpjParte4}-${cnpjParte5}`);
};
