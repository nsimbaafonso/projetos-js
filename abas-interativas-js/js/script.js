const tabs = document.querySelectorAll('.tab-btn');

//percorre todos elementos e adiciona um evento de click
tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

//a função de click
const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active')//adiciona a classe active

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    //pega o atributo
    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId)
    content.classList.add('show')//adiciona a classe show
}

//deixa uma tab ativa por padrão
const currentActiveTab = document.querySelector(".tab-btn.active")
tabClicked(currentActiveTab)