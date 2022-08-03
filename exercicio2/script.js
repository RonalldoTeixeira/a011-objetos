const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};
/*a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

b) Qual o código para imprimir o nome do **último** ator/atriz?

c) Qual o código para exibir o array com **todas** as transmissões de hoje?

d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?*/
// respostas aqui ⬇️

//para acessar um caractere de string ou passar seu índice (variável [ e o numero correspondente e o numero do elemento ])
//A)
console.log(filme.elenco[0]);
//B)
console.log(filme.elenco[3,3]) 
//const nomeDosCanais = filme.transmissoesHoje[0,2].canal
//console.log(nomeDosCanais)
//C)
const {transmissoesHoje} = filme 
console.log(transmissoesHoje);

//D
const horario = filme.transmissoesHoje[0,1].horario
console.log(horario)