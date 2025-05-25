let btn = document.getElementById('arredonda')
btn.addEventListener('click', arredondar)

function arredondar() {//arredonda um número
    let num = Number(document.getElementById('num').value)
    let opcao = document.getElementsByName('opcao')
    let res = document.getElementById('res')
    
    if (opcao[0].checked) {
        let a = Math.ceil(num)//função matemática responsável por arredondar um número por excesso
        res.classList.remove('hide')//remove a classe hide e mostra o resultado
        res.innerHTML = `${num} arredondado por excesso é ${a}`
    } else if (opcao[1].checked) {
        let a = Math.floor(num)//função matemática responsável por arredondar um número por defeito
        res.classList.remove('hide')//remove a classe hide e mostra o resultado
        res.innerHTML = `${num} arredondado por defeito é ${a}`
    } else {
        alert('Socorro!')
    }
}