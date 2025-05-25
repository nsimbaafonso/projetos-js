const mode = document.getElementById('mode_icon')
mode.addEventListener('click', () => {//função responsável por adicionar o dark
    const container = document.getElementById('container')
    const form = document.getElementById('form')
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
        container.classList.add('dark')
        form.classList.add('dark')
    } else {
        mode.classList.add('fa-moon')
        mode.classList.remove('fa-sun')
        container.classList.remove('dark')
        form.classList.remove('dark')
    }
})