const form = document.getElementById("form")
let input = document.getElementById("senha")
let copy = document.querySelector(".fas")
const tam = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#%^&*!/\|()[]~}{€=_-+><"

const allChars = upperCase + lowerCase + number + symbol

let senha = ""

//função que gera a senha
form.addEventListener("submit", (e) => {
	e.preventDefault()
	senha = ""
	senha += upperCase[Math.floor(Math.random() * upperCase.length)]
	senha += lowerCase[Math.floor(Math.random() * lowerCase.length)]
	senha += number[Math.floor(Math.random() * number.length)]
	senha += symbol[Math.floor(Math.random() * symbol.length)]

	while(tam > senha.length){
		senha += allChars[Math.floor(Math.random() * allChars.length)]
	}

	input.value = senha
	console.log(senha)
})

copy.onclick = function copySenha() {
	navigator.clipboard.writeText(senha)
	alert("Senha copiada com sucesso")
}

/*copy.onclick = function copySenha2() {
	input.select() //Isso seleciona todo o conteúdo de um campo de entrada (input)
	document.execCommand(copy) 
	//Esse comando tenta copiar para a área de transferência (clipboard) 
	//o texto que foi previamente selecionado.Esse comando funciona apenas em textos previamente 
	//selecionados, por isso a necessidade do input.select() antes.
	alert("Senha copiada com sucesso 2")
}
*/
/**
 * Quebra da expressão
 * upperCase[Math.floor(Math.random() * upperCase.length)]
 * Isso seleciona um caractere aleatório de um array chamado upperCase
 * 
 * Math.random() * upperCase.length: Multiplica esse número aleatório pelo tamanho do array upperCase, 
 * por exemplo, se upperCase.length for 26, o resultado será algo entre 0 e 25.99
 * 
 * Math.floor(...): Arredonda esse número para baixo, resultando em um número inteiro entre 0 e 25
 * 
 * upperCase[...]: Acessa a posição correspondente dentro do array upperCase
 * 
 * Em resumo:
 * Essa linha está pegando um caractere aleatório da lista upperCase 
 * (possivelmente um array de letras maiúsculas) e adicionando à variável senha, 
 * que representa uma senha sendo montada
*/
