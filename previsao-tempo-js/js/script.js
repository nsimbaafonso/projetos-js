//chave da API OpenWeather
const chave = "d9cb0848444374255fd32d77943ea7db";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//função de click no botão
var btn = document.getElementById('btn');
btn.onclick = function() {
	let cidade = document.querySelector('#cidade').value;
	buscarCidade(cidade);
}

/*
Toda vez que acessamos um servidor externo dentro do JS 
devemos usar funções assíncronas porque ñ sabemos quanto tempo vai demorar
•
await: diz para o JS esperar até o servidor responder
•
Usamos a função fetch() do JS para acessar um servidor
*/

//função que busca cidade
async function buscarCidade(cidade) {
	const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then(res => res.json());
	document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C";
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".humidade").innerHTML = "Humidade: " + dados.main.humidity + "%";
	console.log(dados);
}
