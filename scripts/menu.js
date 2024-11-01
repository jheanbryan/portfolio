const navbarItens = document.getElementById('itens'); // div do navbar
const xCloseMenu = document.getElementById('xMenu'); //X do menu
const barsOpenMen = document.getElementById('burguerMenu'); //Barras de abrir menu
const itenMenu = document.querySelectorAll('.navBarIten'); //navbar menu
const dark = document.getElementById('darkMode'); //modo dark
const light = document.getElementById('lightMode'); //modo claro
const arrowUp = document.getElementById('containerArrowUp');
const html = document.querySelector('html');
const circle = document.querySelector('.circle');
const themeSwitchContainer = document.getElementById('themeSwitchContainer'); 

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
    html.classList.toggle('light-mode', theme === 'light');
}

function toggleTheme() {
    circle.checked = !circle.checked;
    alterTheme(circle.checked ? 'light' : 'dark');
}

//menu
function addEventInMenu() {
    barsOpenMen.addEventListener('click', openMenu);
    xCloseMenu.addEventListener('click', closeMenu);
}

//dark mode
function addEventInIconTheme() {
    themeSwitchContainer.addEventListener('click', toggleTheme);
}

//fechar menu caso tenha click
function AddEventForClickInMenuItem() {
    for (let i = 0; i < itenMenu.length; i++) {
        itenMenu[i].addEventListener('click', closeMenu);
    };
}

//Arrow up
function visibilityInArrowUp() {
    window.addEventListener('scroll', function() {
        var scrollVertical = window.scrollY || document.documentElement.scrollTop;
    
        if (scrollVertical >= 1250) {
            arrowUp.classList.add('block');
        } else {
            arrowUp.classList.remove('block');
        }
    });
}

export function initMenu() {
    addEventInMenu();
    AddEventForClickInMenuItem();
    addEventInIconTheme();
    visibilityInArrowUp();
}
