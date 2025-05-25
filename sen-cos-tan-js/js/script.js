let num = document.getElementById('num')
//let btn = document.getElementById('angulo')

num.addEventListener('input', () => {
    let num = Number(document.getElementById('num').value)
    let opcao = document.getElementsByName('opcao')
    let res = document.getElementById('res')

    if (opcao[0].checked) {
        let seno = Math.sin(num)//função matemática que retorna o seno de um ângulo
        res.classList.remove('hide')//remove a classe hide e mostra o resultado
        res.innerHTML = `Sen${num}<sup>∘</sup> = ${seno.toFixed(2)}`
    } else if (opcao[1].checked) {
        let cosseno = Math.cos(num)//função matemática que retorna o cosseno de um ângulo
        res.classList.remove('hide')//remove a classe hide e mostra o resultado
        res.innerHTML = `Cos${num}<sup>∘</sup> = ${cosseno.toFixed(2)}`
    } else if (opcao[2].checked) {
        let tangente = Math.tan(num)//função matemática que retorna a tangente de um ângulo
        res.classList.remove('hide')//remove a classe hide e mostra o resultado
        res.innerHTML = `Tan${num}<sup>∘</sup> = ${tangente.toFixed(2)}`
    } else {
        alert('Socorro!')
    }
})