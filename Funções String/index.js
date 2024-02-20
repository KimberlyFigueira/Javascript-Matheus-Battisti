var nomeSobrenome = "Kimberly Oliveira"
var nome = "Kimberly"
console.log(nome)
console.log(nome.length)

//indexOf
console.log(nome[2])

//slice
var kim = nome.slice(0,3)
console.log(kim)

//replace
var novoNome = nomeSobrenome.replace("Oliveira", "Figueira")
console.log(novoNome)

//toUpperCase e toLowerCase
console.log(novoNome.toLowerCase())
console.log(novoNome.toUpperCase())

//trim
var nomeEspaco = "      Kim Figueira        "
console.log(nomeEspaco.trim())

//split trasforma em array
console.log(novoNome.split(" "))

//lastIndexOf
//encontra o ultimo index, ultima palavra igual.