//setTimeout: executa função depois de um certo tempo

setTimeout(function(){
console.log("Testando setTimeout")
}, 2000)

console.log("Após setTimeout")

//setInterval
let testando = setInterval(function(){
    console.log("Testando setInterval")
}, 1000)

setTimeout(function(){
    console.log("Parar setInterval")
    clearInterval(testando)
}, 1500)

