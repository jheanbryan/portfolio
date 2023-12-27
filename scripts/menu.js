const navbarItens = document.getElementById('itens'); // div do navbar
const xCloseMenu = document.getElementById('xMenu'); //X do menu
const barsOpenMen = document.getElementById('burguerMenu'); //Barras de abrir menu
const itenMenu = document.querySelectorAll('.navBarIten'); //navbar menu
const dark = document.getElementById('darkMode'); //modo dark
const light = document.getElementById('lightMode'); //modo claro
const arrowUp = document.getElementById('containerArrowUp');
const containerChangeTheme = document.querySelector('.ball-change-theme')
const html = document.querySelector('html');

function openMenu(){
    navbarItens.classList.add('visible');
    xCloseMenu.classList.add('block');
    barsOpenMen.classList.add('none');
}

function closeMenu(){
    navbarItens.classList.remove('visible');
    xCloseMenu.classList.remove('block');
    barsOpenMen.classList.remove('none');
}

function alterTheme(theme){
    if (theme === 'dark') {
        light.classList.remove('none');
        dark.classList.remove('block');
        html.classList.toggle('light-mode');
        addAnimation()

    } else if (theme === 'light') {
        light.classList.add('none');
        dark.classList.add('block');
        html.classList.toggle('light-mode');
        addAnimation()
    };

    //verificar qual tema esta presente para adicionar ou remover a animação
    function addAnimation() {
        if (containerChangeTheme.classList.contains('lightThemeAnimation')) {
            containerChangeTheme.classList.remove('lightThemeAnimation');
            containerChangeTheme.classList.add('darkThemeAnimation');

        } else {
            containerChangeTheme.classList.remove('darkThemeAnimation');
            containerChangeTheme.classList.add('lightThemeAnimation');
        };
    };

};

//menu
function addEventInMenu() {
    barsOpenMen.addEventListener('click', openMenu);
    xCloseMenu.addEventListener('click', closeMenu);
}

//dark mode
function addEventInIconTheme(params) {
    dark.addEventListener('click', () => alterTheme('dark'));
    light.addEventListener('click', () => alterTheme('light'));
}

//fechar menu caso tenha click
function AddEventForClickInMenuItem(params) {
    for (let i = 0; i < itenMenu.length; i++) {
        itenMenu[i].addEventListener('click', closeMenu);
    };
};

//Arrow up
function visibilityInArrowUp() {
    window.addEventListener('scroll', function() {
        var scrollVertical = window.scrollY || document.documentElement.scrollTop;
    
        if (scrollVertical >= 1250) {
            arrowUp.classList.add('block');
    
        } else {
            arrowUp.classList.remove('block');
    
        };
    });
}



export function initMenu() {
    addEventInMenu();
    AddEventForClickInMenuItem();
    addEventInIconTheme();
    visibilityInArrowUp();
}
