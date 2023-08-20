export const projects = [
    {
        name: 'handson',
        title: 'HandsOn',
        path: 'assets/thumb/handson.png',
        link: 'https://handsonweb.netlify.app',
        repo: 'https://github.com/jheanbryan/HandsOn',
        description:'handsonn',

    },
    {
        name: 'cadastro-funcionarios',
        title: 'Cadastro de funcionários',
        path: 'assets/thumb/cadastro-funcionarios.png',
        link: 'https://crudfuncionarios.netlify.app',
        repo: 'https://github.com/jheanbryan/cadastro_funcionarios',
        description:'crud',

    },
    {
        name: 'calculadora-imc',
        title: 'Calculadora de IMC',
        path: 'assets/thumb/calculadora-imc.png',
        link: 'https://jheanbryan.github.io/calculadora-imc/',
        repo: 'https://github.com/jheanbryan/calculadora-imc',
        description:'imc',

    },
    {
        name: 'gerador-de-senha',
        title: 'Site gerador de senha',
        path: 'assets/thumb/gerador-de-senha.png',
        link: 'https://jheanbryan.github.io/site-gerador-de-senha/',
        repo: 'https://github.com/jheanbryan/site-gerador-de-senha',
        description:'gerador de senha',

    },
];

export function searchProject(projectName){
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name === projectName) {
            return projects[i];
            break;
        }
    }
};

//module.exports = { projects, searchProject }