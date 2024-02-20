//inserir elemento no body
//criando elemento de paragrafo
let newParagraph = document.createElement('p')
console.log(newParagraph)

//criando texto
let text = document.createTextNode("Texto do paragrafo")
//inserindo texto no elemento
newParagraph.appendChild(text)
console.log(newParagraph)

let body = document.querySelector('body')
console.log(body)

//inserindo elemento de paragrafo no body
body.appendChild(newParagraph)

//criando h2
let title2 = document.createElement('h2')
console.log(title2)

let text2 = document.createTextNode("Subtexto h2")
title2.appendChild(text2)
console.log(title2)
body.appendChild(title2)

//criando botão
let button = document.createElement('button')
let button2 = document.createTextNode("button hi")
button.appendChild(button2)
body.appendChild(button)

let segundoBotao = document.createElement('button')
let segButton = document.createTextNode("Enter")
segundoBotao.appendChild(segButton)
body.appendChild(segundoBotao)

let terceiroButton = document.createElement('button')
let tercButton = document.createTextNode("Apagar")
terceiroButton.appendChild(tercButton)
body.appendChild(terceiroButton)

let h3 = document.createElement('h3')
let aga3 = document.createTextNode("Texto h3")
h3.appendChild(aga3)
body.appendChild(h3)
