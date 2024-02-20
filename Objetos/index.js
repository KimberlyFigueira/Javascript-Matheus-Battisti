let pessoa = {
    nome: "Fernando",
    sobrenome: "Pascoal",
    idade: 26,
    //função
    nomeSobrenome: function(){
        return console.log(this.nome + " " + this.sobrenome)
    }
}

console.log(pessoa.nome)
pessoa.nomeSobrenome()