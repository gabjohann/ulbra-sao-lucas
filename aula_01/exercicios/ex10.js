const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o seu salário atual: R$", (salarioAtual) => {
  let novoSalario = parseFloat(salarioAtual) * 1.15;
  console.log(
    `Seu novo salário com 15% de aumento será R$${novoSalario.toFixed(2)}.`
  );
  rl.close();
});
