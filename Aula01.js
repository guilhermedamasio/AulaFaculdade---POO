// Necessita executar npm install prompt-sync
import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

const notaMin = 7.0;
let nome = "Ana Luiza";
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let media = (nota1 + nota2)/2;
console.log(`Aluno: ${nome}`);
console.log(`Média: ${media}`);