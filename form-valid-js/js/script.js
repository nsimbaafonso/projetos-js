let form = document.getElementById('form')
let box = document.querySelector('.inputBox')
let nomes = document.getElementById('nome')
let emails = document.getElementById('email')
let senhas = document.getElementById('password')
let confirm_senhas = document.getElementById('confirm-pass')

form.addEventListener('submit', (event) => {//função que valida o formulário
    event.preventDefault()

    //pegamos os inputs
    let nome = nomes.value
    let email = emails.value
    let senha = senhas.value
    let confirm_senha = confirm_senhas.value

    //pegamos as mensagens  de erro
    let nomeError = document.getElementById('nomeError')
    let emailError = document.getElementById('emailError')
    let senhaError = document.getElementById('passError')
    let confirmError = document.getElementById('confirmError')

    //os campos que exibem as mensagens de erros começam vazio
    nomeError.textContent = ""
    emailError.textContent = ""
    senhaError.textContent = ""
    confirmError.textContent = ""

    let valid = false//inicializamos o valid com false

    if (nome === "") {//verificamos o nome
        nomeError.textContent = "O campo nome é obrigatório"
        valid = false
    } else {
        nomeError.textContent = ""
        valid = true
    }

    if (email === "") {//verificamos o email
        emailError.textContent = "O campo email é obrigatório"
        valid = false
    } else if (!isValidEmail(email)) {
        emailError.textContent = "E-mail inválido.";
        valid = false;
    } else {
        emailError.textContent = ""
        valid = true
    }

    if (senha === "") {//verificamos a senha
        senhaError.textContent = "O campo senha é obrigatório"
        valid = false
    } else if (senha.length < 8) {
        senhaError.textContent = "A senha deve ter no mínimo 8 caracteres"
        valid = false
    } else {
        senhaError.textContent = ""
        valid = true
    }

    if (confirm_senha === "") {//verificamos a confirmação da senha
        confirmError.textContent = "A confirmação da senha é obrigatório"
        valid = false
    } else if (confirm_senha !== senha) {
        confirmError.textContent = "As senhas não são compativeís"
        valid = false
    } else {
        confirmError.textContent = ""
        valid = true
    }

    if (valid) {
        alert('Cadastrado com sucesso!')
    } /*else {
        alert('Preencha todos os campos corretamente!')
    }*/
    
    return valid 
})

//função auxiliar que valida o email usando RegEx
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}