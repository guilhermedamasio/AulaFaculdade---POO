//D1) Escrever um programa JavaScript que solicita a quantidade de sucos e sanduíches consumidos pelos clientes de uma mesa de uma lanchonete e exibe o recibo com os valores parciais e o total final a pagar conforme abaixo
import promptSync from "prompt-sync";
const prompt = promptSync({sigint: true});

const valorIngresso = 500;

console.log("Categorias de clientes:");
console.log("1 - Geral");
console.log("2 - Convidado");
console.log("3 - Idoso");
console.log("4 - Funcionário");
console.log("5 - Funcionário Idoso");
console.log("6 - Criança\n");

let categoriaCliente = Number(prompt("Digite a sua categoria (1, 2, 3, 4, 5 ou 6).\n"));

switch (categoriaCliente) {
    case 1:
        console.log(`Valor do ingresso: R$${valorIngresso}`);
        break;
    case 2:
        console.log(`Valor do ingresso: R$${valorIngresso * 0.75}`);
        break;
    case 3:
        console.log(`Valor do ingresso: R$${valorIngresso * 0.5}`);
        break;
    case 4:
        console.log(`Valor do ingresso: R$${valorIngresso * 0.5}`);
        break;
    case 5:
        console.log(`Valor do ingresso: R$${valorIngresso * 0.5 * 0.5}`);
        break;
    case 6:
        console.log(`Valor do ingresso: R$${valorIngresso * 0}`);
        break;
    default:
        console.log("Categoria inválida.");
}