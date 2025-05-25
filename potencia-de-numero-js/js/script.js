let btn = document.getElementById('potencia')
btn.addEventListener('click', potencia)

function potencia() {//calcula a potência de um número
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let res = document.getElementById('res')
    let p = Math.pow(num1, num2)//função matemática rwsponsável por retornar a potência de um número

    res.classList.remove('hide')//remove a classe hide e mostra o resultado
    res.innerHTML = `${num1}<sup>${num2}</sup> = ${p}`
}