let btn = document.getElementById('fatorial')
btn.addEventListener('click', fatorial)

function fatorial() {//calcula o fatorial
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')
    let fat = 1

    res.classList.remove('hide')//remove a classe hide
    
    for (let n = num; n >= 1; n--) {//faz a contagem regressiva do valor digitado. ex: 5 4 3 2 1
        fat *= n //recebe ele mesmo vezes(x) os valores da contagem
        res.innerHTML = `${num}! = ${fat}`
        //res.innerHTML = `${num}! = ${fat.toFixed(2).replace('.',',')}`
    }
}