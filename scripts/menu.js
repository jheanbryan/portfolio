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