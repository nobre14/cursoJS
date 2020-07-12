const prod1 = {} //par de chaves é objeto vazio
prod1.nome = 'Celular ultra mega'
prod1.preco = 4498.90
prod1['Desconto legal'] = 0.40 //é possível, evitar
console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
    obj: {
        teste: 'teste',
        teste2: 'teste2'
    }
}

console.log(prod2)

//JSON
'{"nome": "Camisa", "preco": 79.90}'
