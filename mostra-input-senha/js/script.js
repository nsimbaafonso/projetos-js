//pegando a classe do ícone e id do input
let i = document.querySelector(".fas")
let password = document.getElementById("password")

//função que mostra e oculta a password
i.onclick = function(){
	i.classList.toggle("fa-eye")

	//verificando o tipo do elemento(input)
	if (password.type == "password") {
		password.type = "text"
	} else {
		password.type = "password"
	}
}