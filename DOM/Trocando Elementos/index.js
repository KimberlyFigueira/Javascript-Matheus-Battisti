//criar elemento
let elemento = document.createElement('h3')
//adicionar classe no elemento
elemento.classList = 'Testando-classe'

//criando texto do elemento
var text = document.createTextNode("Teste Substituição H3")
//inserindo o texto no elemento
elemento.appendChild(text)
console.log(elemento)

//selecionar elemento
let h1 = document.querySelector('#title')
console.log(title)
//selecionar elemento pai
//var elPai = title.parentNode
let body = document.querySelector("body")
//trocar os elementos: elemento que vai entrar, elemento que vai sair
body.replaceChild(elemento, title)

////////////////////////////////////////
let elemento2 = document.createElement("h1")
elemento2.classList = "Classe-elemento"

var texto = document.createTextNode("Texto do h1")
elemento2.appendChild(texto)
console.log(elemento2)

let paragraph = document.querySelector("#paragrafo")
console.log(paragraph)

let elPai = paragraph.parentNode
elPai.replaceChild(elemento2, paragraph)