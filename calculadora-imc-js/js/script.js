const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    //Vai impedir o carregamento da página quando enviarmos os dados
    event.preventDefault()

    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)
    let info = document.getElementById('infos')
    let valor = document.getElementById('value')
    let desc = document.getElementById('desc')

    const imc = (peso / (altura * altura)).toFixed(2)
   
    info.classList.remove('hide')
    let description = ``
    value.classList.add('attention')

    if (imc < 18.5) {
        description = 'Cuidado! Você está abaixo do peso.'
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'Você está no peso ideal.'
        value.classList.remove('attention')
        value.classList.add('normal')
    } else if (imc > 25 && imc <= 30) {
        description = 'Cuidado! Você está com sobrepeso.'
    } else if (imc > 30 && imc <= 35) {
        description = 'Cuidado! Você está com obesidade moderada.'
    } else if (imc > 35 && imc <= 40) {
        description = 'Cuidado! Você está com obesidade severa.'
    } else {
        description = 'Cuidado! Você está com obesidade morbida.'
    }

    valor.textContent = imc.replace('.',',')
    desc.textContent = description
})