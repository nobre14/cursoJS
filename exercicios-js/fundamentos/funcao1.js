//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

imprimirSoma(2) //NaN

// Função com retorno
function soma(a, b = 0){ // caso nao seja passado parametro ele já estará tratado
    return a + b
}

console.log(soma(2, 3))