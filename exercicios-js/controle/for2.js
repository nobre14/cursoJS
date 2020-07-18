const notas = [6, 1, 10, 8, 7, 9]

for (let i in notas) {
    console.log(`nota = ${i} - ${notas[i]}`)
}

const pesssoa = {
    nome: 'Rafael',
    idade: 34,
    pes: 90,
    sobrenome: 'Nobre'
}

for (let atributo in pesssoa) {
    console.log(`${atributo} = ${pesssoa[atributo]}`)
}
