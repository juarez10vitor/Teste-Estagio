let minhaString = "Laranja";
let vogal = "a";
let contador = 0 // recebimento de dados

function verificar(vogal){ // função onde recebe o nome de verificar e o parametro vogal 

    for (let i = 0; i < minhaString.length; i++) { //itera sobre cada elemento da string    
        if(minhaString[i] == vogal) { //verifica se a string apresenta a letra informada 
            contador++;//cada vez que itera sobre a string e encontra a vogal é incrementado na variavel contador 
        } 
    }
    return contador
}

let quantidade = verificar(vogal) //Chamando a função 
console.log(`A vogal ${vogal} aparece ${quantidade} vezes na string`)// imprime mensagem dizendo letra presente e quantidade de vezes 

