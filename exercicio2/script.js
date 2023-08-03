/*
let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!")
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!")
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!")
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!")
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!")
} else{
    console.log("nacionalidade não encontrada")
}
*/
/*
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;
*/
const askUsarioFunction = () => {
let nacionalidade = prompt("Escreva aqui sua nacionalidade: 1- brasileira | 2- argentina | 3- uruguaia | 4- chilena | 5- colombiana").toLowerCase()
return nacionalidade
}
const saveNacionalidade = askUsarioFunction()


function nacionalidadeSwitchFunction(saveNacionalidade) {
    switch(saveNacionalidade) {
        case 'brasileira':
            console.log("Sua nacionalidade é: brasileira");
            break;
        case 'argentina':
            console.log("Sua nacionalidade é: argentina");
            break;
        case 'uruguaia':
            console.log("Sua nacionalidade é: uruguaia");
            break;
        case 'chilena':
            console.log("Sua nacionalidade é: chilena");
            break;
        case 'colombiana':
            console.log("Sua nacionalidade é: colombiana");
            break;
        default:
            console.log("Nacionalidade não encontrada");
        
    }
}
const argument = nacionalidadeSwitchFunction(saveNacionalidade)