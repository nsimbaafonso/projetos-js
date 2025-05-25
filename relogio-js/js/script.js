let time = setInterval(() => {
    let hora = new Date().getHours()//pega a hora
    let minutos = new Date().getMinutes()//pega os minutos
    let segundos = new Date().getSeconds()//pega os segundos

    //atribuimos os valores nos elementos HTML(span) correspondentes aos ID 
    document.getElementById('hora').innerText = hora
    document.getElementById('minutos').innerText = minutos
    document.getElementById('segundos').innerText = segundos
});