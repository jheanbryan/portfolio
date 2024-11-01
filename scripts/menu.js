const navbarItens = document.getElementById('itens'); // div do navbar
const xCloseMenu = document.getElementById('xMenu'); //X do menu
const barsOpenMen = document.getElementById('burguerMenu'); //Barras de abrir menu

const openMenu = () => {
    navbarItens.classList.add('visible');
    xCloseMenu.classList.add('block');
    barsOpenMen.classList.add('none');
}

const closeMenu = () => {
    navbarItens.classList.remove('visible');
    xCloseMenu.classList.remove('block');
    barsOpenMen.classList.remove('none');
}

const alterTheme = (theme) => {
    const html = document.querySelector('html');
    html.classList.toggle('light-mode', theme === 'light');
}

const toggleTheme = () => {
    const circle = document.querySelector('.circle');
    circle.checked = !circle.checked;
    alterTheme(circle.checked ? 'light' : 'dark');
}

//menu
const addEventInMenu = () => {
    barsOpenMen.addEventListener('click', openMenu);
    xCloseMenu.addEventListener('click', closeMenu);
}

//dark mode
const addEventInIconTheme = () => {
    const themeSwitchContainer = document.getElementById('themeSwitchContainer'); 
    themeSwitchContainer.addEventListener('click', toggleTheme);
}

//fechar menu caso tenha click
const AddEventForClickInMenuItem = () => {
    const itemMenu = document.querySelectorAll('.navBarIten');
    for (let i = 0; i < itemMenu.length; i++) {
        itemMenu[i].addEventListener('click', closeMenu);
    };
}

//Arrow up
const visibilityInArrowUp = () => {
    const arrowUp = document.getElementById('containerArrowUp');
    
    window.addEventListener('scroll', () => {
        var scrollVertical = window.scrollY || document.documentElement.scrollTop;
    
        if (scrollVertical >= 1250)
            arrowUp.classList.add('block');
        else
            arrowUp.classList.remove('block');
    });
}

export const initMenu = () => {
    addEventInMenu();
    AddEventForClickInMenuItem();
    addEventInIconTheme();
    visibilityInArrowUp();
}
