// const com dados de cada projeto
const projects = [
    {
        name: 'handson',
        title: 'HandsOn',
        path: 'assets/thumb/handson.png',
        link: 'https://handsonweb.netlify.app',
        repo: 'https://github.com/jheanbryan/HandsOn',
        description:'Página web simples, feita apenas para relembrar alguns conceitos de HTML e CSS.',
        alt: 'Site HandsOn'

    },
    {
        name: 'cadastro-funcionarios',
        title: 'Cadastro de funcionários',
        path: 'assets/thumb/cadastro-funcionarios.png',
        link: 'https://crudfuncionarios.netlify.app',
        repo: 'https://github.com/jheanbryan/cadastro_funcionarios',
        description:'CRUD - CREATE, READ UPDATE e DELETE <br> Os dados inseridos pelo usuário são salvos no Local Storage.',
        alt: 'Site Cadastro de funcionários'
    },
    {
        name: 'calculadora-imc',
        title: 'Calculadora de IMC',
        path: 'assets/thumb/calculadora-imc.png',
        link: 'https://jheanbryan.github.io/calculadora-imc/',
        repo: 'https://github.com/jheanbryan/calculadora-imc',
        description:'Projeto simples de uma calculadora de IMC, um dos primeiros projetos feitos, bem simples, foi usado o DOM para manipular os elementos HTML.',
        alt: 'Site Calculadora IMC'
    },
    {
        name: 'gerador-de-senha',
        title: 'Site gerador de senha',
        path: 'assets/thumb/gerador-de-senha.png',
        link: 'https://jheanbryan.github.io/site-gerador-de-senha/',
        repo: 'https://github.com/jheanbryan/site-gerador-de-senha',
        description:'Projeto web simples, porém com um pouco mais de estilização, recolhe o número de caracteres do usuário e retorna uma senha aleatória.',
        alt: 'Site Gerador de senha'
    },
];

//Função para procurar um projeto
let position;
function searchProject(projectName){
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name === projectName) {
            return projects, position = [i]
            break;
        }
    }
};



// Função que verifica qual modal é e abri, já preenchido
let modal = document.querySelector('dialog');
function openModal(projeto){
    if (projeto === 'handson'){
        searchProject(projeto); // procurar o projeto
        imgModal.src = projects[position].path;
        imgModal.alt = projects[position].alt;
        tituloDoProjeto.innerHTML = projects[position].title;
        descricaoDoProjeto.innerHTML = projects[position].description;
        btnModalProjeto.href = projects[position].link;
        btnModalRepositorio.href = projects[position].repo;
        modal.style.display = 'flex'
        modal.show();
    }
    if (projeto === 'cadastro-funcionarios'){
        searchProject(projeto); // procurar o projeto
        imgModal.src = projects[position].path;
        imgModal.alt = projects[position].alt;
        tituloDoProjeto.innerHTML = projects[position].title;
        descricaoDoProjeto.innerHTML = projects[position].description;
        btnModalProjeto.href = projects[position].link;
        btnModalRepositorio.href = projects[position].repo;
        modal.style.display = 'flex';
        modal.show();
    }
    if (projeto === 'calculadora-imc'){
        searchProject(projeto); // procurar o projeto
        imgModal.src = projects[position].path;
        imgModal.alt = projects[position].alt;
        tituloDoProjeto.innerHTML = projects[position].title;
        descricaoDoProjeto.innerHTML = projects[position].description;
        btnModalProjeto.href = projects[position].link;
        btnModalRepositorio.href = projects[position].repo;
        modal.style.display = 'flex';
        modal.show();
    }
    if (projeto === 'gerador-de-senha'){
        searchProject(projeto); // procurar o projeto
        imgModal.src = projects[position].path;
        imgModal.alt = projects[position].alt;
        tituloDoProjeto.innerHTML = projects[position].title;
        descricaoDoProjeto.innerHTML = projects[position].description;
        btnModalProjeto.href = projects[position].link;
        btnModalRepositorio.href = projects[position].repo;
        modal.style.display = 'flex';
        modal.show();
    }
}


//Função para fechar o modal
function closeModal(){
    modal.close();
    modal.style.display = 'none';
}