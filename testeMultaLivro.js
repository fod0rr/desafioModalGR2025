const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularMulta(valorMultaPorDia, diasAtraso) {
    // Converte valores para números e substitui vírgula por ponto, se necessário
    valorMultaPorDia = parseFloat(valorMultaPorDia.toString().replace(',', '.'));
    diasAtraso = parseInt(diasAtraso);

    // Valida entrada
    if (isNaN(valorMultaPorDia) || isNaN(diasAtraso) || valorMultaPorDia < 0 || diasAtraso < 0) {
        console.log("Por favor, insira valores numéricos válidos e positivos.");
        return;
    }

    // Calcula a multa total
    let multaTotal = valorMultaPorDia * diasAtraso;

    // Aplica o valor mínimo de multa
    if (multaTotal < 1.00) {
        multaTotal = 1.00;
    }

    // Formata o valor para duas casas decimais após a vírgula
    let multaFormatada = multaTotal.toFixed(2).replace('.', ',');

    // Exibe a mensagem no formato exigido
    console.log(`O valor da multa para ${diasAtraso} dias de atraso é: R$${multaFormatada}`);
}

rl.question("Digite o valor da multa por dia: ", (valorMulta) => {
  rl.question("Digite a quantidade de dias de atraso: ", (diasAtraso) => {
    calcularMulta(valorMulta, diasAtraso);
    rl.close();
  });
});
