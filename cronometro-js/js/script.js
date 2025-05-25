const timerEl = document.getElementById('timer')
const marksList = document.getElementById('marks-list')
let intervalId = 0
let timer = 0
let marks = []

//função que formata o tempo
const formatTime = (time) => {
    const hours = Math.floor(time / 360000)
    const minutes = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 6000) / 100)
    const hundredths = time % 100

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`
}

//função que marca o tempo
const addMarkToList = (markIndex, markTime) => {
    marksList.innerHTML += `<p><strong>Marca:</strong> ${markIndex}:${formatTime(markTime)}</p>`
}
const markTime = () => {
    marks.push()
    addMarkToList(marks.length, timer)
}

//função que incrementa o tempo
const toggleTimer = () => {
    const button = document.getElementById('power')
    const action = button.getAttribute('action')

    clearInterval(intervalId)//inicia um novo intervlo

    if (action == "start" || action == "continue") {
        intervalId = setInterval(() => {
            timer += 1
            setTimer(timer)
        }, 10);
        button.setAttribute('action', 'pause')
        button.innerHTML = '<i class="fas fa-pause"></i>'
    } else if (action == "pause") {
        button.setAttribute('action', 'continue')
        button.innerHTML = '<i class="fas fa-play"></i>'
    }
}

//função que reseta o tempo
const resetTime = () => {
    clearInterval(intervalId)
    timer = 0
    marks = []
    setTimer(timer)
    marksList.innerHTML = ''
    const button = document.getElementById('power')
    button.setAttribute('action', 'start')
    button.innerHTML = '<i class="fas fa-play"></i>'
}

//função que mostra o tempo
const setTimer = (time) => {
    timerEl.innerText = formatTime(time)
}

document.getElementById('power').addEventListener('click', toggleTimer)
document.getElementById('mark').addEventListener('click', markTime)
document.getElementById('reset').addEventListener('click', resetTime)