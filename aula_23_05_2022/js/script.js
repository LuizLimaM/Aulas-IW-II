var botao = document.getElementById('botao')
var lamp = document.getElementById('chico')

//Evento

botao.onclick = function(){
    //alert('Clicado!')
    if(botao.value == 'Feliz'){
        lamp.src ='./img/feliz.jpg'
        botao.value = 'Triste'
        botao.innerHTML = 'Triste'
    }
    else{
        lamp.src = './img/triste.jpg'
        botao.value = 'Feliz'
        botao.innerHTML = 'Feliz'
    }
}