const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }

    const faturamentoDiario = JSON.parse(data);

    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    for (const item of faturamentoDiario) {
        const valor = item.faturamento;
        if (valor != null && valor > 0) {
            if (valor < menorFaturamento) menorFaturamento = valor;
            if (valor > maiorFaturamento) maiorFaturamento = valor;
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    }

    const mediaMensal = somaFaturamento / diasComFaturamento;

    let diasAcimaMedia = 0;
    for (const item of faturamentoDiario) {
        const valor = item.faturamento;
        if (valor != null && valor > mediaMensal) {
            diasAcimaMedia++;
        }
    }

    console.log(`Menor valor de faturamento: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMedia}`);
});


