const grandientBox = document.querySelector('.gradient-box')
const selectMenu = document.querySelector('.select-box select')
const colorInputs = document.querySelectorAll('.colors input')
const textarea = document.querySelector('textarea')
const refreshBtn = document.querySelector('.refresh')
const copyBtn = document.querySelector('.copy')

//função responsável por gerar cor aleatóriamente
const getRandonColor = () => {
    const randonHex = Math.floor(Math.random() * 0xffffff).toString(16)
    return `#${randonHex}`
}

//função responsável por gerar gradient 
const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = getRandonColor()
        colorInputs[1].value = getRandonColor()
    }
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`
    grandientBox.style.background = gradient
    textarea.value = `background: ${gradient}`
}

//função responsável por copiar o código gerado 
const copyCode = () => {
    navigator.clipboard.writeText(textarea.value)
    copyBtn.innerText = "Código Copiado"
    setTimeout(() => copyBtn.innerText = 'Código Copiado', 1600);
}

//ciclo responsável adicionar o evento de gerar gradient nos inputs color
colorInputs.forEach(input => {
    input.addEventListener('input', () => generateGradient(false))
});

//função responsável por mudar a direção do gradient e atualizar as cores
selectMenu.addEventListener('change', () => generateGradient(false))
refreshBtn.addEventListener('click', () => generateGradient(true))
//função responsável por copiar
copyBtn.addEventListener('click', copyCode)