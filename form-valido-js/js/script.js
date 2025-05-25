let form = document.getElementById('form')
let nomes = document.getElementById('nome')
let emails = document.getElementById('email')
let assuntos = document.getElementById('assunto')
let msgs = document.getElementById('msg')

form.addEventListener('submit', (event) => {//função que valida o formulário
    event.preventDefault()

    //pegamos os inputs
    let nome = nomes.value
    let email = emails.value
    let assunto = assuntos.value
    let msg = msgs.value

    //pegamos as mensagens  de erro
    let nomeError = document.getElementById('nomeError')
    let emailError = document.getElementById('emailError')
    let assuntoError = document.getElementById('assuntoError')
    let msgError = document.getElementById('msgError')

    //os campos que exibem as mensagens de erros começam vazio
    nomeError.textContent = ""
    emailError.textContent = ""
    assuntoError.textContent = ""
    msgError.textContent = ""

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

    if (assunto === "") {//verificamos o assunto
        assuntoError.textContent = "O campo assunto é obrigatório"
        valid = false
    } else {
        assuntoError.textContent = ""
        valid = true
    }

    if (msg === "") {//verificamos a mensagem
        msgError.textContent = "A mensagem é obrigatório"
        valid = false
    } else {
        msgError.textContent = ""
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