const navbarItens = document.getElementById('itens'); // div do navbar
const xCloseMenu = document.getElementById('xMenu'); //X do menu
const barsOpenMen = document.getElementById('burguerMenu'); //Barras de abrir menu
const itenMenu = document.querySelectorAll('.navBarIten'); //navbar menu

const dark = document.getElementById('darkMode'); //modo dark
const light = document.getElementById('lightMode'); //modo claro

const arrowUp = document.getElementById('containerArrowUp');

function openMenu(){
    navbarItens.style.left = '0'
    xCloseMenu.style.display = 'block';
    barsOpenMen.style.display = 'none';
}

function closeMenu(){
    navbarItens.style.left = '-400px';
    xCloseMenu.style.display = 'none';
    barsOpenMen.style.display = 'block';
}

function alterTheme(theme){
    if (theme === 'dark') {
        darkMode.style.display = 'none';
        lightMode.style.display = 'block';
        document.querySelector('html').classList.toggle('light-mode');

    } else if (theme === 'light') {
        darkMode.style.display = 'block';
        lightMode.style.display = 'none';
        document.querySelector('html').classList.toggle('light-mode');
    }


}

//menu
barsOpenMen.addEventListener('click', openMenu);
xCloseMenu.addEventListener('click', closeMenu);

//dark mode
dark.addEventListener('click', () => alterTheme('dark'));
light.addEventListener('click', () => alterTheme('light'));

for (let i = 0; i < itenMenu.length; i++) {
    itenMenu[i].addEventListener('click', closeMenu);
}


window.addEventListener('scroll', function() {
    var scrollVertical = window.scrollY || document.documentElement.scrollTop;

    if (scrollVertical >= 1250) {
        arrowUp.style.display = 'block';

    } else {
        arrowUp.style.display = 'none'
    }
});
