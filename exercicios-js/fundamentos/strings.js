const escola = "escola"

console.log(escola.charAt(4)) // retorna a letra
console.log(escola.charCodeAt(4)) // numero da letra
console.log(escola.indexOf("s"))// posicao da letra
console.log(escola.substring(1)) // a partir do char
console.log(escola.substring(0,3)) // inicia no indice 0 ate o 2
console.log("escola ".concat(escola).concat('!')) // concatenar 
console.log(escola.replace(/\w/g, 'x')) // subistitui letra

console.log("rafael, thiago, luis".split(',')) // separa e gera um array

const nome = 'rafael'
const contatenacao = 'ola ' + nome + '!'

console.log(contatenacao)

//crase
const template = ` 
Olá 
${nome} !`

console.log(contatenacao, template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei ...  ${up('cuidado')} !`)