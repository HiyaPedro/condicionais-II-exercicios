console.log("Just checking we are connected")
//----------Exercicio 1--------------//

/*Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3. 
*/

// (a) Utilizando ifs aninhados

const divisívelPor2Números = () => {
    const receba1Número = prompt("insira um número")
    if(receba1Número % 2 === 0) {
        console.log("Sim o número é divisivel por 2")
    } if(receba1Número % 3 === 0 ) {
        console.log("Sim o número é divisivel por 3")
    } else {
        console.log("Escolha outro número")
    }
}
divisívelPor2Números()

// Utilizando um operador lógico para unir duas operações relacionais
//(1) utilizamos && para E
/*
A number is divisible by both 2 and 3 if and only if it is divisible by 6, meaning it is a multiple of 6.
*/

const divisívelPor2NúmerosAnd = () => {
    const usarioNum1 = prompt("insira um número")
    if(usarioNum1 % 2 === 0 && usarioNum1 % 3 === 0) {
        console.log("O número é divisivel por 2 e 3")
    } else {
        console.log("o número não é múltiplo de 6")
    }
}
divisívelPor2NúmerosAnd()

//(2) utilizamos o II para OU

const divisívelPor2NúmerosOr = () => {
    const usarioNum2 = prompt("insira um número")
    if(usarioNum2 % 2 === 0 || usarioNum2 % 3 === 0) {
        console.log("O número é divisivel por 2 ou 3")
    } else {
        console.log("Escolha outro número")
    }
}
divisívelPor2NúmerosOr()