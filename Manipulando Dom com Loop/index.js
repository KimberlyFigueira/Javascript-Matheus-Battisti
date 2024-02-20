var frutas = ['Pera', 'Maçã', 'Banana', 'Uva', 'Morango']

var listaUl = document.createElement('ul')

var body = document.getElementsByTagName('body')

body[0].appendChild(listaUl)

var listanobody = document.getElementsByTagName('ul')

console.log(listanobody[0])

for(var i = 0; i < frutas.length; i++){
    var liFor = document.createElement('li')
    var textoLi = document.createTextNode(frutas[i])
    liFor.appendChild(textoLi)
    listanobody[0].appendChild(liFor)
}
