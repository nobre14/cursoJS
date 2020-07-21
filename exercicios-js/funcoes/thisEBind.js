const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // não vai falar pois não tem o this do objeto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()