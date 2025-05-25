//função que faz inserção de números e operadores
function insert(num) {
	var numero = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = numero + num;
	//document.getElementById('resultado').innerHTML += num;
}

//função que limpa o resultado
function clean() {
	document.getElementById('resultado').innerHTML = "";
}

//função que apaga o resultado
function back() {
	var resultado = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//função que calcula o resultado
function calcular() {
	var resultado = document.getElementById('resultado').innerHTML;
	if (resultado) {
		document.getElementById('resultado').innerHTML = eval(resultado);
	} else {
		document.getElementById('resultado').innerHTML = "Nada para calcular!";
	}
}