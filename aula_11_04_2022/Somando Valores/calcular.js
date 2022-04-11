var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var res = document.getElementById('resultado')

function somar(){   
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var soma = num1 + num2
    res.innerHTML = `A soma de ${num1} + ${num2} é ${soma}`
}

function subtração(){
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var soma = num1 - num2
    res.innerHTML = `A subtração de ${num1} - ${num2} é ${soma}`
}

function dividir(){
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var soma = num1 / num2
    res.innerHTML = `A divisão de ${num1} / ${num2} é ${soma}`
}

function multiplicar(){
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var soma = num1 * num2
    res.innerHTML = `A multiplicação de ${num1} x ${num2} é ${soma}`
}