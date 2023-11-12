import { projetosWeb, projetosNode, projetosPython, projetosReactNative } from "./projetos.js";

//redenizador de projetos no html
let containerWeb = document.getElementById('projetos-web');
let containerNodeJs = document.getElementById('projetos-node');
let containerReactNative = document.getElementById('projetos-react-native');
let containerPython = document.getElementById('projetos-python');

function redenizarProjeto(nomeDaDiv, nomeContainer){
    function desenharConteudo(listaDeProjetos){
        for(let i = 0; i<listaDeProjetos.length; i++){
            let projeto = listaDeProjetos[i];
            let divContent = `
            <div class="projeto" onclick= openModal("${projeto.name}")>
            <div><span>${projeto.title}</span></div>
            <img src=${projeto.path} alt=${projeto.alt}>
            </div>
            `;
            nomeContainer.innerHTML += divContent;
        }
    }

    desenharConteudo(nomeDaDiv);

}

function acharProjeto(){

}
//modal
//Buscar o projeto
let position = 0;
function searchProject(listaDeProjetos, nomeDoProjeto){
    for (let i = 0; i < listaDeProjetos.length; i++) {
        if (listaDeProjetos[i].name === nomeDoProjeto) {
            return listaDeProjetos, position = [i]
            break;
        }
    }
};

//Buscar informações do projeto
function infosProjeto(listaDeProjetos){
    imgModal.src = listaDeProjetos.path;
    imgModal.alt = listaDeProjetos.alt;
    tituloDoProjeto.innerHTML = listaDeProjetos.title;
    descricaoDoProjeto.innerHTML = listaDeProjetos.description;
    btnModalProjeto.href = listaDeProjetos.link;
    btnModalRepositorio.href = listaDeProjetos.repo;
    modal.style.display = 'flex'
    modal.show();
}

// Função que verifica qual modal é e abri, já preenchido
let modal = document.querySelector('dialog');
function openModal(nomeDoProjeto){
    switch (nomeDoProjeto) {
        case 'handson':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosWeb[0])
            break;
        case 'cadastro-funcionarios':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosWeb[1])
            break;
        case 'calculadora-imc':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosWeb[2])
            break;
        case 'gerador-de-senha':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosWeb[3])
            break;
        case 'magazine-hashtag':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosWeb[4])
            break;
        case 'dev-link':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosWeb[5])
            break;
        case 'login-form':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosWeb[6])
            break;
        case 'pagina-de-clima':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosWeb[7])
            break;
        case 'zapbot':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosNode[0])
            break;   
        case 'api-lp3':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosNode[1])
            break; 
        case 'crud-postgreSql':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosNode[2])
            break;   
        case 'netflix-login':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosReactNative[0])
            break;   
        case 'calculadoras-saude':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosReactNative[1])
            break;  
        case 'calculadoras-areas':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosReactNative[2])
            break; 
        case 'agendador-contatos':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosReactNative[3])
            break;  
        case 'medidor-velocidade-internet':
            searchProject(nomeDoProjeto); // procurar o projeto
            infosProjeto(projetosPython[0])
            break;  
        default:
            break;
    }
}
window.openModal = openModal;

redenizarProjeto(projetosWeb, containerWeb);
redenizarProjeto(projetosNode, containerNodeJs);
redenizarProjeto(projetosReactNative, containerReactNative);
redenizarProjeto(projetosPython, containerPython);



//Função para fechar o modal
function closeModal(){
    modal.close();
    modal.style.display = 'none';
}

let xModal = document.getElementById('xModal'); 

xModal.addEventListener('click', closeModal)
