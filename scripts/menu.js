let navbarItens = document.getElementById('itens'); // div do navbar
let xCloseMenu = document.getElementById('xMenu'); //X do menu
let barsOpenMen = document.getElementById('burguerMenu'); //Barras de abrir menu
let itenMenu = document.querySelectorAll('.navBarIten'); //navbar menu

let dark = document.getElementById('darkMode'); //modo dark
let light = document.getElementById('lightMode'); //modo claro


function clickMenu(){
    if (navbarItens.style.display == 'block'){
        navbarItens.style.display = 'none';
        xCloseMenu.style.display = 'none';
        barsOpenMen.style.display = 'block';
    } else{
        navbarItens.style.display = 'block'
        xCloseMenu.style.display = 'block';
        barsOpenMen.style.display = 'none';
    }

}

function closeMenu(){
    xCloseMenu.style.display = 'none';
    barsOpenMen.style.display = 'block';
    navbarItens.style.display = 'none';
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
barsOpenMen.addEventListener('click', clickMenu);
xCloseMenu.addEventListener('click', clickMenu);

//dark mode
dark.addEventListener('click', () => alterTheme('dark'));
light.addEventListener('click', () => alterTheme('light'));

for (let i = 0; i < itenMenu.length; i++) {
    itenMenu[i].addEventListener('click', closeMenu);
}
