const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log( pokemon1, 'objeto original')
const pokemon1Copia = {
    ...pokemon1,
    nome : 'Squirtle',
    tipo : 'Água',
    }
console.log( pokemon1Copia, 'copia modificada nome e tipo')

pokemon1.ataques = []
 const ataque1 = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100 
 }
pokemon1.ataques.push(ataque1)
console.log( pokemon1, 'Original Add propriedade array')
pokemon1Copia.novosAtaques = [] 

const novosAtaques =  {...ataque1 } 
pokemon1Copia.novosAtaques.push(novosAtaques)
console.log(pokemon1Copia)

const ataqueFolhaNavalha = {
    nome: "Folha Navalha",
    dano: 45,
    precisão: 100,
   tipo : 'Gama',
}

pokemon1.ataques.push(ataqueFolhaNavalha)
console.log(pokemon1, "Add Ataque Folha Navalha a array original")

const jatoDeAgua = {
    nome: "Jato de Água",
    dano: 40,
    precisão: 100,
  };

  pokemon1Copia.novosAtaques.push(jatoDeAgua);
  console.log(pokemon1Copia, "Add Ataque Jato de Água à cópia do array") 

  console.log(pokemon1, "Impressão da Array Original: ", );
  console.log(pokemon1Copia, "Impressão da Cópia Array");