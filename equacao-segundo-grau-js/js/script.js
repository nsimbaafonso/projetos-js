let btn = document.getElementById('equacao')

btn.addEventListener('click', equacao)
function equacao() {
    let a = Number(document.getElementById('numa').value)
    let b = Number(document.getElementById('numb').value)
    let c = Number(document.getElementById('numc').value)
    let res = document.getElementById('res')
    let delta
    let x1
    let x2

    delta = Math.pow(b, 2) - 4 * a *c

    res.classList.remove('hide')
    res.innerHTML = `<p><strong>Equação</strong>: ${a}x² + ${b}x + ${c} = 0</p>`
    res.innerHTML += `<p><strong>Coeficientes</strong>: a = ${a} | b = ${b} | c = ${c}</p>`
    res.innerHTML += `<p><strong>Delta</strong>: ∆ = b² - 4.a.c</p>`
    res.innerHTML += `<p><strong>Delta</strong>: ∆ = ${b}² - 4.${a}.${c}</p>`
    res.innerHTML += `<p><strong>Delta</strong>: ∆ = ${delta}</p>`
    res.innerHTML += `<p><strong>Raíz quadrada de Delta</strong>: √${delta} = ${Math.sqrt(delta)}</p>`
    
    res.innerHTML += `<p>-----------------------------------------------------------</p>`

    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2*a)
        x2 = (-b - Math.sqrt(delta)) / (2*a)
        res.innerHTML += `<p>Se Delta (∆ > 0) for positivo há duas raízes reais e distintas</p>`
        res.innerHTML += `<p><strong>Resultado</strong>: X<sub>1</sub> = ${x1.toFixed(2)} ; X<sub>2</sub> = ${x2.toFixed(2)}</p>`
        res.innerHTML += `<p><strong>Conjunto Solução</strong>: S = {${x1.toFixed(2)}, ${x2.toFixed(2)}}</p>`
    } else if (delta < 0) {
        res.innerHTML += `<p>Se Delta (∆ < 0) for negativo não existem raízes reais</p>`
    } else if (delta == 0) {
        x1 = (-b + Math.sqrt(delta)) / (2*a)
        x2 = (-b - Math.sqrt(delta)) / (2*a)
        res.innerHTML += `<p>Se Delta (∆ = 0) for igual a 0 há duas raízes reais e iguais</p>`
        res.innerHTML += `<p><strong>Resultado</strong>: X<sub>1</sub> = ${x1.toFixed(2)} ; X<sub>2</sub> = ${x2.toFixed(2)}</p>`
        res.innerHTML += `<p><strong>Conjunto Solução</strong>: S = {${x1.toFixed(2)}, ${x2.toFixed(2)}}</p>`
    } else {
        res.innerHTML += `<p>Socorro!</p>`
    }
}