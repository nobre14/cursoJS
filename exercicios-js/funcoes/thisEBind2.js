function Pessoa() {
    this.idade = 0

    const self = this // cria constante para acessar os atributos do this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/* .bind(this)*/, 1000)
}

new Pessoa