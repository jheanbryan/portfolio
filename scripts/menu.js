function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none';

        xMenu.style.display = 'none';
        burguerMenu.style.display = 'block';
    } else{
        itens.style.display = 'block'

        xMenu.style.display = 'block';
        burguerMenu.style.display = 'none';
    }

}

function closeMenu(){
    xMenu.style.display = 'none';
    burguerMenu.style.display = 'block';
    itens.style.display = 'none';
}

function alterTheme(theme){
    if (theme === 'dark') {
        darkMode.style.display = 'none';
        lightMode.style.display = 'block';
        document.querySelector('html').classList.toggle('light-mode')

    } else if (theme === 'light') {
        darkMode.style.display = 'block';
        lightMode.style.display = 'none';
        document.querySelector('html').classList.toggle('light-mode')
    }


}