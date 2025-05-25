let tam = document.getElementById('tam')//pega o valor do range
let valor = document.getElementById('valor')//recebe o  valor do range
let btn = document.getElementById('senha')//botão
let password = document.getElementById('password')//palavra-pass
let res = document.getElementById('res')//resultado

//função que mostra o valor do range na tela quando arrastamos
valor.innerHTML = tam.value
tam.oninput = function () {
    valor.innerHTML = this.value//this: significa que mudamos o valor que estiver atualmente
}

//caracteres usados para gerar a senha
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$€?/\-%£µ|#&~'
let novaSenha = ''//vai armazenar a senha copiada

//função do gerador de senha
function geradorSenha() {
    let pass = ''
    /**
     * O i começa com 0 e vai continuando passando dentro do for() até que o
     * i seja menor que valor do range(tam.value), ou seja menor que a quantidade de caracteres que o usuário selecionou
     * n pega o tamanho de caracteres dentro variável charset
    */
    for (let i = 0, n = charset.length; i < tam.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
        /**
         * Basicamente vamos gerar um número aleatório de acordo o tamanho de caracteres do charset
         * a função charAt() pega uma posição(número)e retorna uma string
         * No nosso caso vai pegar a posição dentro da variável charset e retornar a string com base na sua posição
         * a função Math.floor() retorna a parte inteira de um número
         * a função Math.random() gera um número aleatório
         * n é o tamanho do nosso charset
        */
    }
    res.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass
}
btn.onclick = geradorSenha//atribuímos a função para a variável btn

//função responsável por copiar a palavra-pass
function copyPassword() {
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
}

res.onclick = copyPassword//atribuimos a função para a variável res