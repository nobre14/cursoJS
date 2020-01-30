let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

isAtivo = 0
console.log(!!isAtivo)

console.log("tipos que são verdadeiros: ")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("tipos que são falsos: ")
console.log(!!0)
console.log(!!'') // vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("finalizando..")
console.log(!!('' || null || 0 || ' ')) // será veradeiro

let nome = 'rafael'
console.log(nome || 'Desconhecido')
