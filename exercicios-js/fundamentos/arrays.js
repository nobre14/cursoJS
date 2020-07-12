const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[2])

valores[5] = 10
console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // mostra e retira o ultimo valor 

console.log(valores)

delete valores[0] // deleta o elemento
console.log(valores)

console.log(typeof valores) //verica o tipo 