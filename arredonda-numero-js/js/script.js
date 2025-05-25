let num = document.getElementById('num')
num.addEventListener('change', arredonda)

function arredonda() {//arredonda um número
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')
    let a = Math.round(num)//função matemática responsável por arredondar um número por excesso ou defeito

    res.classList.remove('hide')//remove a classe hide e mostra o resultado
    res.innerHTML = `${num} arredondado é ${a}`
}