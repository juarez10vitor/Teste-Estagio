
    function numeroFibonnaci(numero){
        // Inicializa os primeiros números da sequência de Fibonacci
        let numA = 0;
        let numB = 1;
        //Continua até que numB seja menor que o número fornecido
        while( numB < numero){
        //Calcula o próximo número da sequência
            let numC = numA + numB;
        // Move os valores para o próximo cálculo
            numA = numB;
            numB = numC;

        }
        // Verifica se o último número calculado é igual ao número fornecido
        return numB === numero 

    }
    // Pega o número do usuário
    const numeroUsuario = 7
    
    //Chama a função para verificar se o número pertence à sequência
    if(numeroFibonnaci(numeroUsuario)){
        //Se pertencer, imprime uma mensagem
        console.log(`Numero ${numeroUsuario} pertence a sequência Fibonacci`)
    }else{
        // Caso contrário, imprima uma mensagem final
        console.log(`Numero ${numeroUsuario} não pertence a sequência Fibonacci`)
    }
