import promptSync from "prompt-sync";
const prompt = promptSync({sigint: true});

function acrescentaVerificador(matFuncionario) {
    let digitos = matFuncionario;
    let soma = 0;

    while (digitos.length != 1) {
    for (let i = 0; i < digitos.length; i++) {
        soma = soma + Number(digitos[i]);
    }
    digitos = String(soma);
    soma = 0;
    }
    return matFuncionario+'-'+digitos;

}

let matFuncionario = prompt('Digite os 6 dígitos da sua matrícula. ');
let matricula = acrescentaVerificador(matFuncionario);
console.log(`Numero de matricula completo: Matrícula: ${matricula}`);
