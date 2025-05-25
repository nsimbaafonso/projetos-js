let plus = document.getElementById('plus')
let valor = document.getElementById('valor')
let minus = document.getElementById('minus')
let resetar = document.getElementById('reset')

let c = 0
let intervalId = 0 

const updateValor = () => {//atualiza o valor exibido na tela
    valor.innerHTML = c
}

plus.addEventListener('mousedown', adicionar)
function adicionar() {//adiciona valor
    intervalId = setInterval(() => {//inicia o intervalo e adiciona 1 ao contador
        c += 1
        updateValor()
    }, 100)
}

minus.addEventListener('mousedown', subtrair)
function subtrair() {//subtrai valor
    intervalId = setInterval(() => {//inicia o intervalo e subtrai 1 ao contador
        c -= 1
        updateValor()
    }, 100)
}

resetar.addEventListener('click', () => {//reseta o valor
    //c = 0
    valor.innerHTML = "0"
    updateValor()
})

//responsável por pausar a contagem quando soltar o mouse
document.addEventListener('mouseup', () => clearInterval(intervalId))