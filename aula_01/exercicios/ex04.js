const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro número intero: ", (num1) => {
  rl.question("Digite o segundo número inteiro: ", (num2) => {
    console.log(
      `O somatório entre ${num1} e ${num2} é ${parseInt(num1) + parseInt(num2)}`
    );
    rl.close();
  });
});
