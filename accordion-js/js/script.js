const accordions = document.querySelectorAll('.accordion')

//função responsável por ativar/desativar um accordion
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        //pega cada accordion clicado
        const body = accordion.querySelector('.accordion-body')
        //adiciona/remove a classe active no accordion clicado
        body.classList.toggle('active')
    })
});