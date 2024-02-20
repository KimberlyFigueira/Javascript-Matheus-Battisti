let frutas = ['Pêra', 'Maçã', 'Banana', "Uva", 'Morango']
//length
console.log(frutas.length)

//push: adiciona elemento
frutas.push('Blueberry')
console.log(frutas)

//pop: remove elemento fim array
console.log(frutas.pop())

//unshift: adiciona elemento no começo
frutas.unshift("Blueberry")
console.log(frutas)

//shift: remove elemento do começo
frutas.shift()
console.log(frutas)

//acessar ultimo elemento
console.log(frutas[frutas.length - 1])

//isArray
console.log(Array.isArray(frutas))

//splice: adiciona elemento
//indice, quantos quer remover, item a adicionar
frutas.splice(2, 0, "Laranja")
console.log(frutas)

//indexOf
console.log(frutas.indexOf("Uva"))

//join: transforma em string
console.log(frutas.join(", "))

//reverse: reverte a ordem dos elementos
console.log(frutas.reverse())