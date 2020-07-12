let valor // não inicializado
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) não pode

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 10
console.log(produto)

console.log(!!produto.preco)

produto.preco = null // produto sem preco
console.log(produto)
console.log(!!produto.preco)