//D1) Escrever um programa JavaScript que solicita a quantidade de sucos e sanduíches consumidos pelos clientes de uma mesa de uma lanchonete e exibe o recibo com os valores parciais e o total final a pagar conforme abaixo
import promptSync from "prompt-sync";
const prompt = promptSync({sigint: true});

const precoSuco = 1;
const precoSanduiche = 2;

let qntSuco = Number(prompt("Digite a quantidade de sucos consumidos: "));
let qntSanduiche = Number(prompt("Digite a quantidade de sanduíches consumidos: "));

let qntConsumidaSuco = qntSuco*precoSuco;
let qntConsumidaSanduiche = qntSanduiche*precoSanduiche;

if (qntSuco > 10){
    qntConsumidaSuco = qntConsumidaSuco * 0.8; // Aplica desconto de 20%
}
if (qntSanduiche > 10){
    qntConsumidaSanduiche = qntConsumidaSanduiche * 0.8;
}

let qntConsumida = qntConsumidaSuco + qntConsumidaSanduiche;

console.log(`Quantidade de sucos consumidos: ${qntSuco}`);
console.log(`Quantidade de sanduíches consumidos: ${qntSanduiche}`);
console.log(`Total de sucos: R$${qntConsumidaSuco}`);
console.log(`Total de sanduíches: R$${qntConsumidaSanduiche}`);
console.log(`Valor que o cliente irá ter que pagar: R$${qntConsumida}\n`);