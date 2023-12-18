import { projetosWeb, projetosNode, projetosPython, projetosReactNative } from "./projetos.js";

let containerWeb = document.getElementById('projetos-web');
let containerNodeJs = document.getElementById('projetos-node');
let containerReactNative = document.getElementById('projetos-react-native');
let containerPython = document.getElementById('projetos-python');
let xModal = document.getElementById('xModal'); 
let modal = document.querySelector('.modal');


//redenizador de projetos no html
function renderProjectInHtml(divName, containerName){
    function writeContent(projectsList){
        for(let i = 0; i<projectsList.length; i++){
            let project = projectsList[i];
            let divContent = `
            <div class="card-projeto projeto" id="${project.name}">
                <div class="info-project">
                    <span class="title-project">
                        ${project.title}
                    </span>

                    <div class="container-icons">
                    </div>

                </div>
            </div>
            `;
            containerName.innerHTML += divContent;
            let cardProject = document.getElementById(project.name);
            cardProject.style.backgroundImage = `url(${project.path})`;
            checkAndAddSvgTechnologie(project);

        };
 
    };

    writeContent(divName);

};

//Adicionar os icones nas imagens dos projetos
function checkAndAddSvgTechnologie(projeto){
    projeto.technologies.forEach(technologie => {
        const containerSvg = document.querySelector(`#${projeto.name} .container-icons`)

        const divSvg = document.createElement('div');
        divSvg.classList.add('div-svg');

        const newSvg = document.createElement('object');
        newSvg.classList.add('icon-programming-language');
        newSvg.type = 'image/svg+xml';
        newSvg.data = `./assets/icons/languages/white/${technologie}.svg`;

        const spanTechnologie = document.createElement('span');
        spanTechnologie.classList.add('span-technologie')
        spanTechnologie.textContent = technologie;

        containerSvg.appendChild(divSvg);
        divSvg.appendChild(newSvg);
        divSvg.appendChild(spanTechnologie);


    });
}

//abrir o modal de acordo com o projeto clicado
function createAddEventListener(){
    const projetosArray = document.querySelectorAll('.projeto');

    projetosArray.forEach((item) => {
        item.addEventListener('click', () => openModal(item.id));
    });
}

//Buscar informações do projeto
function addInfosInModal(projeto){
    imgModal.src = projeto.path;
    imgModal.alt = projeto.alt;
    tituloDoProjeto.innerHTML = projeto.title;
    descricaoDoProjeto.innerHTML = projeto.description;
    btnModalProjeto.href = projeto.link;
    btnModalRepositorio.href = projeto.repo;

    modal.classList.remove('none');
    modal.classList.add('flex');
}

// Função que verifica qual modal é e abri, já preenchido
function openModal(nomeDoProjeto){
    let arraysProjetcts = [projetosWeb, projetosNode, projetosReactNative, projetosPython]
    for (let i = 0; i < arraysProjetcts.length; i++) {
        arraysProjetcts[i].forEach((projeto)=> {
            if (projeto.name == nomeDoProjeto) {
                addInfosInModal(projeto);
            };
        });
    };  
};

//Função para fechar o modal
function closeModal(){
    
    modal.classList.remove('flex')
    modal.classList.add('none');
}

//função principal
function init() {
    xModal.addEventListener('click', closeModal)
    window.openModal = openModal;

    renderProjectInHtml(projetosWeb, containerWeb);
    renderProjectInHtml(projetosNode, containerNodeJs);
    renderProjectInHtml(projetosReactNative, containerReactNative);
    renderProjectInHtml(projetosPython, containerPython);
    createAddEventListener();
}

init();