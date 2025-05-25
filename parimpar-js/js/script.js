let btn = document.getElementById('parimpar')
btn.addEventListener('click', parImpar)

function parImpar() {//
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')

    if (num % 2 == 0) {//verifica se o resto da divisão por 2 é igual a 0
        res.classList.remove('hide')//retira a classe hide e mostra a resposta
        res.innerHTML = `O número ${num} é par`//caso seja o número é par
    } else {
        res.classList.remove('hide')
        res.innerHTML = `O número ${num} é ímpar`//caso não seja o número é ímpar
    }  
}