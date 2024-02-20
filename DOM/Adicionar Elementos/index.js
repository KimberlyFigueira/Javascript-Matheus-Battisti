//criando elemento div
var elemento = document.createElement("div")
//criar class dentro do elemento
elemento.classList = "div-criada"
console.log(elemento)

//selecionando elemento pai
var container = document.querySelector("#container")
//inserindo elemento filho
container.appendChild(elemento)