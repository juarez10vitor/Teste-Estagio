const faturamentoDiario = [100, 200, 150, 300, 250, 400, 350, 220, 180, 500, 450, 300, 220, 210, 190, 250, 275, 300, 400, 350, 280, 320]; 

let menorFaturamento = faturamentoDiario[0];
let maiorFaturamento = faturamentoDiario[0];
let somaFaturamento = 0;
let diasAcimaMedia = 0;

for (let i = 0; i < faturamentoDiario.length; i++) {
    const valor = faturamentoDiario[i];
    if (valor < menorFaturamento) menorFaturamento = valor;
    if (valor > maiorFaturamento) maiorFaturamento = valor;
    somaFaturamento += valor;
}

const mediaMensal = somaFaturamento / faturamentoDiario.length;

for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > mediaMensal) diasAcimaMedia++;
}

console.log(`Menor valor de faturamento: ${menorFaturamento}`);
console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMedia}`);
