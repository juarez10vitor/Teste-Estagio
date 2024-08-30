const faturamentoPorEstado = [
    { estado: 'SP', faturamento: 67836.43 },
    { estado: 'RJ', faturamento: 36678.66 },
    { estado: 'MG', faturamento: 29229.88 },
    { estado: 'ES', faturamento: 27165.48 },
    { estado: 'Outros', faturamento: 19849.53 }
];

const totalFaturamento = faturamentoPorEstado.reduce((total, estado) => total + estado.faturamento, 0);

faturamentoPorEstado.forEach(estado => {
    const percentual = (estado.faturamento / totalFaturamento) * 100;
    console.log(`Estado: ${estado.estado}, Percentual: ${percentual.toFixed(2)}%`);
});

