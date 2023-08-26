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
    {
        name: 'zapbot',
        title: 'Bot de WhatsApp',
        path: 'assets/thumb/zap-bot.png',
        link: 'https://github.com/jheanbryan/zap-bot',
        repo: 'https://github.com/jheanbryan/zap-bot',
        description:'Projeto em feito em NodeJS, um bot de WhatsApp construído com base na API baileys, além disso contém algumas funcionalidades, como buscar cep, baixar músicas do Youtube e fazer figurinhas.',
        alt: 'Bot para o WhatsApp'
    },
    {
        name: 'api-lp3',
        title: 'API/CRUD com NodeJs e MongoDB',
        path: 'assets/thumb/api-lp3.png',
        link: 'https://github.com/jheanbryan/api-lp3',
        repo: 'https://github.com/jheanbryan/api-lp3',
        description:'Projeto desenvolvido como critério de avaliação durante a disciplina de LP3 do curso técnico em informática do IFMS <br> Foi desenvolvido uma api/crud que armazene algumas informações no MongoDB, sendo um produto que tem nome, valor e data da criação. ',
        alt: 'CRUD com NodeJs e MongoDB'
    },
    {
        name: 'crud-postgreSql',
        title: 'CRUD com NodeJs e PostgreSql',
        path: 'assets/thumb/crud-postgresql.png',
        link: 'https://github.com/jheanbryan/crud_postgreesql',
        repo: 'https://github.com/jheanbryan/crud_postgreesql',
        description:'CRUD - CREATE, READ UPDATE e DELETE <br>Projeto realizado na disciplina de LP4 do curso técnico em informática do IFMS <br>Projeto construído com NodeJs e PostgreSQL como banco de dados. Para o desenvolvimento desse projeto foi pensado em uma imobiliária, onde é necessário guardar informações de clientes, visto que cada cliente deve possuir uma id, a propriedade e o valor.',
        alt: 'CRUD com NodeJs e PostegreSQL'
    },
    {
        name: 'netflix-login',
        title: 'Tela de Login da Netflix Mobile',
        path: 'assets/thumb/netflix-login.png',
        link: 'https://snack.expo.dev/@jhean/netflix-login',
        repo: 'https://snack.expo.dev/@jhean/netflix-login',
        description:'Clone da tela de login da Netflix Mobile, apenas para fixar alguns dos conceitos básicos de estilização do React Native',
        alt: 'Clone da tela de Login da Netflix'
    },
    {
        name: 'calculadoras-saude',
        title: 'Calculadoras Saúde',
        path: 'assets/thumb/calculadoras-saude.png',
        link: 'https://snack.expo.dev/@jhean/calculadeiras-saude',
        repo: 'https://snack.expo.dev/@jhean/calculadeiras-saude',
        description:'APP com 3 telas, onde cada tela realiza um calculo diferente, tais como IMC, ICQ e Peso Ideal.',
        alt: 'Calculadoras para a saúde'
    },
    {
        name: 'calculadoras-areas',
        title: 'Calculadoras de Áreas',
        path: 'assets/thumb/calculadoras-areas.png',
        link: 'https://snack.expo.dev/@jhean/calculadora-de-areas',
        repo: 'https://snack.expo.dev/@jhean/calculadora-de-areas',
        description:'APP com 5 telas, onde cada tela realiza um calculo matemático diferente, como foi pensado em áreas, os respectivos calculos das áreas são: Quadrado, Triângulo, Círculo, Hexágono e Retângulo.',
        alt: 'Calculadoras de áreas'
    },
    {
        name: 'agendador-contatos',
        title: 'Agenda de contatos',
        path: 'assets/thumb/agendador-contatos.png',
        link: 'https://snack.expo.dev/@jhean/lista-tarefas',
        repo: 'https://snack.expo.dev/@jhean/lista-tarefas',
        description:'APP simples que armazena valores inseridos pelo usuário, sendo ele o número e o nome de um contato, simulando uma agenda.',
        alt: 'Agenda de contatos'
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


//Função para fechar o modal
function closeModal(){
    modal.close();
    modal.style.display = 'none';
}