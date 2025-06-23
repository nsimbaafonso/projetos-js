const searchForm = document.getElementById("search-form") //o formulário
const searchBox = document.getElementById("search-box") //o input
const searchResult = document.getElementById("search-result") //a div que mostra as imagens
const mostrarMais = document.getElementById("mostrar-mais") //o botão que exibe mais imagens

const key = "P-8bscKGe0oVNm1uhhJ9rx1fphNlybBH1GVH8ZOsD7w"//chave da API
let keyword = ""
let page = 1


//Função que busca as imagens via API
async function buscaImg() {
	keyword = searchBox.value
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`

	const response = await fetch(url)
	const data = await response.json()

	const resultados = data.results
	resultados.map((result) => {
		const div = document.createElement("div") //div criada
		div.classList.add("box") //adicionada a classe box na div
		const img = document.createElement("img") //img criada
		img.src = result.urls.small //pegando a imagem do array result, no objeto urls, na chave small
		img.alt = result.description //atributo alt da imagem

		div.appendChild(img) // adicionando a imagem na div criada
		searchResult.appendChild(div) // adicionando a div criada na div que exibe os resultados

	})

	mostrarMais.classList.remove("hide")

	//console.log(data)
}

//Adicionando evento ao form
searchForm.addEventListener("submit", function(e) {
	e.preventDefault()
	buscaImg()
})

//mostra mais imagens ao clicar
mostrarMais.addEventListener("click", () => {
	page++ //incrementa + 1
	buscaImg()
})
