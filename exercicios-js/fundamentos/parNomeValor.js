// par nome/valor

const saudacao = 'opa' // contexto léxico 1 (local físico conde nome/valor foi definido)

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos de pares nome/valor

const Cliente = {
    nome: 'Rafael',
    idade: 34,
    peso: 92,
    endereco: {
        logradouro: 'rua tal',
        numero:  123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)