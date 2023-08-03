//códigos a serem reescritos

// a)
/*
if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}
*/
let nome = prompt('Digite o seu nome').toUpperCase()

const imprimeNome = (nome) => {
	return nome === "José" ? "Oi, Zé!": "Olá, " + nome;
}
console.log(imprimeNome(nome));

// b)
/*
if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}
*/
let idade = prompt("Qual é a sua idade?").toLowerCase()

const ageZ = (idade) => {
	return idade >= 18 ? "Pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista!";
}
const saveAge = ageZ(idade);
console.log(saveAge);

