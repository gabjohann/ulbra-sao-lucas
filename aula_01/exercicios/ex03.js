const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o seu nome: ", (nome) => {
  rl.question("Digite o seu salário R$: ", (salario) => {
    console.log(`O funcionário ${nome} recebe R$${salario} por mês.`);
    rl.close();
  });
});
