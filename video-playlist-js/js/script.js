let videoList = document.querySelectorAll('.list')//pega todos elementos HTML(div) com a clasee list

videoList.forEach(video => {//percorre todos os elementos com a classe list
    video.onclick = function () {//função
        let src = video.querySelector('.list-video').src//pega a origem do vídeo
        let titulo = video.querySelector('.list-title').textContent//pega o título do vídeo

        document.querySelector('.video-play').src = src//recebe a origem
        document.querySelector('.video-play').play()//toca o vídeo
        document.querySelector('.video-play-title').innerHTML = titulo//recebe o título

        //adiciona a classe active no vídeo que estiver tocando
        video.classList.add('active')
    }
});