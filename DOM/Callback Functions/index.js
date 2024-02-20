function exibir(num){
    console.log("A operação resultou em: "+ num)
}

function soma(a, b, callback){
    var operacao = a+b
    callback(operacao)
}

soma(5, 7, exibir)