let toca = document.getElementById('play')
toca.addEventListener('click', tocar)

function tocar() {//Faz o áudio tocar
    let audio = document.getElementById('audio').play()
    toca.innerText = 'Tocando...'
    pausa.innerText = 'Pausar'
}

let pausa = document.querySelector('#pause')
pausa.addEventListener('click', pausar)

function pausar() {//Faz o áudio parar
    let audio = document.querySelector('#audio').pause()
    pausa.innerText = 'Em pausa...'
    toca.innerText = 'Tocar'
}