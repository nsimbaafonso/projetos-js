var btnChange = document.getElementById('alterar')

//função que mostra e oculta o input
document.getElementById('show').onclick = () => {
	input.classList.toggle('hide')
}

//função que mostra a hora depois de carregar a página
btnChange.onclick = () => {
	var msg = document.getElementById('msg')
	var img = document.getElementById('img')
	var hora = parseInt(document.getElementById('Ihora').value)
	var horaAtual = new Date().getHours()//pega a hora atual do sistema

	//atribuindo a mensagem ao elemento HTML via ID
	//msg.innerHTML = `Agora são <strong>${horaAtual}</strong> horas`

	//verificando os dados de entrada
	if (isNaN(hora) || hora < 0 || hora > 24) {
		alert('Por favor, digite uma hora válida entre 0 e 24')
	}

	// Mudando a imagem e mensagem consoante a hora do dia
	if (hora >= 0 && hora < 12) {
		img.src = 'img/fotomanhã.png'
		document.body.style.background = '#b6b616'
		msg.innerHTML = `Bom dia! Agora são <strong>${hora}</strong> horas`
	} else if (hora >= 12 && hora < 18) {
		img.src = 'img/fototarde.png'
		document.body.style.background = '#bb7c06'
		msg.innerHTML = `Bom tarde! Agora são <strong>${hora}</strong> horas`
	} else if (hora >= 18 && hora < 24) {
		img.src = 'img/fotonoite.png'
		document.body.style.background = '#1f1d1d'
		msg.innerHTML = `Boa noite! Agora são <strong>${hora}</strong> horas`
	} else {
		document.body.style.background = '#e51c23'
		msg.innerHTML = `Hora inválida`
	}
}
