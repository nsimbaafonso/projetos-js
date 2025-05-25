let btn = document.getElementById('absoluto')
btn.addEventListener('click', absoluto)

function absoluto() {//calcula o valor absoluto de um número
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')
    let v = Math.abs(num)//função matemática responsável por retornar o valor absoluto de um número
    res.classList.remove('hide')//remove a classe hide e mostra o resultado
    res.innerHTML = `O valor absoluto de ${num} é ${v}`
}