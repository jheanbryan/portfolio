const navbarItens = document.getElementById('itens'); // div do navbar
const xCloseMenu = document.getElementById('xMenu'); //X do menu
const barsOpenMen = document.getElementById('burguerMenu'); //Barras de abrir menu
const itenMenu = document.querySelectorAll('.navBarIten'); //navbar menu

const dark = document.getElementById('darkMode'); //modo dark
const light = document.getElementById('lightMode'); //modo claro

const arrowUp = document.getElementById('containerArrowUp');

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

//fechar menu caso tenha click
for (let i = 0; i < itenMenu.length; i++) {
    itenMenu[i].addEventListener('click', closeMenu);
}

//Arrow up
window.addEventListener('scroll', function() {
    var scrollVertical = window.scrollY || document.documentElement.scrollTop;

    if (scrollVertical >= 1250) {
        arrowUp.classList.add('block');

    } else {
        arrowUp.classList.remove('block');

    }
});
