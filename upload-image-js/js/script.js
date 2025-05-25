let fileInput = document.getElementById('file-input')
let imageContainer = document.getElementById('images')
let numberOfImage = document.getElementById('number-of-image')

//função responsável por carregar as imagens
fileInput.onchange = () => {
    imageContainer.innerHTML = ""
    numberOfImage.textContent = `${fileInput.isDefaultNamespace.length} imagem(ns) selecionada(s)`
    numberOfImage.style.color = "black"

    for (const i of fileInput.files) {
        let reader = new FileReader()
        let figure = document.createElement('figure')
        let figCap = document.createElement('figcaption')
        figCap.innerText = i.name
        figure.appendChild(figCap)
        reader.onload = () => {
            let img = document.createElement('img')
            img.setAttribute('src', reader.result)
            figure.insertBefore(img, figCap)
        }
        imageContainer.appendChild(figure)
        reader.readAsDataURL(i)
    }
} 
