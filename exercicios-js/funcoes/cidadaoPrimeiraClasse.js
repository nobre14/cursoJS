// Função em JS é First-Class Object (Citizens)
// Higher-order function


// forma literal
function fun1() {

}

// Armazenar em variável
const fun2 = function () { // função anonima

}

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em atributo de objeto
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar())

// Passar como parametro de outra função
function run(fun) {
    fun()
}
run(function () { console.log('executando ..') })

// Uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)

const funcaoDentroDaFuncao = soma(2, 3)
funcaoDentroDaFuncao(4)
