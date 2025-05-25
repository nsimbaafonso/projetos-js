let calculo = document.getElementById('calcular')
calculo.addEventListener('click', () => {
    let n1 = parseFloat(document.getElementById('num1').value)
    let n2 = parseFloat(document.getElementById('num2').value)
    let n3 = parseFloat(document.getElementById('num3').value)
    let res = document.getElementById('res')

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 === 0) {
        res.innerText = "Inválido!"
        return
    }

    let solucao = (n3 * n2) / n1//recebe o cálculo da regra de 3 simples

    if (Number.isInteger(solucao)) {//se o número for inteira, retira as casas decimais
        res.innerText = solucao
    }
    res.innerText = solucao.toFixed(2).replace('.',',')
    
})