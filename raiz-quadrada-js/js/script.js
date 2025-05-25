let btn = document.getElementById('raiz')
btn.addEventListener('click', raiz)

function raiz() {//calcula raíz quadrada
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')
    let v = Math.sqrt(num)//função matématica responsável por retornar a raíz quadrada de um número
    res.classList.remove('hide')//remove a classe hide e mostra a resposta
    res.innerHTML = `√${num} = ${v}`
}