//hora de hoje
setInterval(() => {
	//pegando hora, minutos e segundos
	let hora = new Date().getHours();
	let minutos = new Date().getMinutes();
	let segundos = new Date().getSeconds();

	document.getElementById('hora').innerText = hora;
	document.getElementById('minutos').innerText = minutos;
	document.getElementById('segundos').innerText = segundos;
});

function dataHoje() {
	// Pegando dia da semana, dia do mês, nome do mês e ano atual
	let diaSemana = new Date().getDay();
    let diaS = "";
    let dia = new Date().getDate();
    let mes = new Date().getMonth();
    let mesN = "";
    let ano = new Date().getFullYear();
    let hora = new Date().getHours();
    let saudacao = "";

    //dia da semana
    switch (diaSemana) {
        case 0:
            diaS = "Domingo";
            break;
        case 1:
            diaS = "Segunda-feira";
            break;
        case 2:
            diaS = "Terça-feira";
            break;
        case 3:
            diaS = "Quarta-feira";
            break;
        case 4:
            diaS = "Quinta-feira";
            break;
        case 5:
            diaS = "Sexta-feira";
            break;
        case 6:
            diaS = "Sabádo";
            break;
        default:
            diaS = "Erro: Dia inválido";
            break;
    }

    //nome do mês
    switch (mes) {
        case 0:
            mesN = "Janeiro";
            break;
        case 1:
            mesN = "Fevereiro";
            break;
        case 2:
            mesN = "Março";
            break;
        case 3:
            mesN = "Abril";        
            break;
        case 4:
            mesN = "Maio";
            break;
        case 5:
            mesN = "Junho";
            break;
        case 6:
            mesN = "Julho";
            break;
        case 7:
            mesN = "Agosto";
            break;
        case 8:
            mesN = "Setembro";
            break;
        case 9:
            mesN = "Outubro";
            break;
        case 10:
            mesN = "Novembro";
            break;
        case 11:
            mesN = "Dezembro";
            break;
        default:
            diaS = "Erro: Dia inválido";
            break;
    }

    //Saudação
    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde!";
    } else if (hora >= 18 && hora < 24) {
        saudacao = "Boa noite!";
    } else {
        saudacao = "É madrugada!";
    }

    return `${saudacao} Hoje é ${diaS}, dia ${dia} de ${mesN} de ${ano}`;
}
document.getElementById('datahoje').innerText = dataHoje();
