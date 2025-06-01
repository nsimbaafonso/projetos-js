// site da api usada no projeto: https://goqr.me/api/
// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}
// Testando outros paramêtros https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=14107c&bgcolor=0a0a0a&data=${encodeURIComponent(qrText)}

let res = document.getElementById("res")
let imgQr = document.getElementById('imgQr')
let qrText = document.getElementById("qrText")
let btn = document.querySelector(".btn")
let downloadBtn = document.querySelector("#downloadBtn")

btn.onclick = () => {

	if (qrText.value.length == 0) {
		alert("Digite alguma coisa, o campo está vazio!")
	} else {
		//gerando a imagem do qrcode
		const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`
		//const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=14107c&bgcolor=0a0a0a&data=${encodeURIComponent(qrText.value)}`
		
		//recebendo a imagem gerada
		imgQr.src = qrUrl

		//atribuindo a imagem gerada no link do botão de download
		downloadBtn.href = qrUrl
		downloadBtn.download = qrUrl
		
		res.classList.remove("hide")
	}
	
}


/** Explicação do ChatGPT
 * 
A função encodeURIComponent() é uma função JavaScript que codifica uma string para que ela possa 
ser usada com segurança como parte de uma URL.

O que ela faz exatamente?
Ela substitui caracteres especiais por suas representações em código hexadecimal UTF-8, 
precedido por %, para que esses caracteres não sejam interpretados incorretamente pela URL.

Por que usar?
Em URLs, certos caracteres têm significados especiais. Por exemplo:

& separa parâmetros

= separa chaves e valores

? inicia os parâmetros da query string

# representa um fragmento da página

Se você tiver esses caracteres em dados reais (como em um texto ou link), 
precisa codificá-los para que a URL funcione corretamente.

Exemplo:

const texto = "nome=João & Maria";
const urlSegura = encodeURIComponent(texto);
console.log(urlSegura);
Saída:

nome%3DJo%C3%A3o%20%26%20Maria
*/
