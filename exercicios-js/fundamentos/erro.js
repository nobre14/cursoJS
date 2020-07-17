function tratarErroELancar(erro) {
    //throw new Error('erro tratado caralha')
    //throw 10
    //throw true
    //throw ' mensagem '
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('erro final')
    }
}

const obj = { nome: 'Rafael' }

imprimirNomeGritado(obj)