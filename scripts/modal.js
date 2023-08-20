let modal = document.querySelector('dialog');

function openModal(projeto){
    if (projeto === 'handson'){
        imgModal.src = 'assets/thumb/handson.png';
        imgModal.alt = "site HandsOn";

        tituloDoProjeto.innerHTML = 'HandsOn'
        DescricaoDoProjeto.innerHTML = 'bla bla'

        modal.style.display = 'flex'
        modal.show();
    }
    if (projeto === 'cadastro-funcionarios'){
        imgModal.src = 'assets/thumb/cadastro-funcionarios.png';
        imgModal.alt = "site cadastro de funcionarios";

        tituloDoProjeto.innerHTML = 'Cadastro de funcionarios';
        DescricaoDoProjeto.innerHTML = 'bla bla'

        modal.style.display = 'flex'
        modal.show();
    }
    if (projeto === 'calculadora-imc'){
        imgModal.src = 'assets/thumb/calculadora-imc.png';
        imgModal.alt = "site de calculadora de imc";

        tituloDoProjeto.innerHTML = 'Calculdora de IMC'
        DescricaoDoProjeto.innerHTML = 'bla bla'

        modal.style.display = 'flex'
        modal.show();
    }
    if (projeto === 'gerador-de-senha'){
        imgModal.src = 'assets/thumb/gerador-de-senha.png';
        imgModal.alt = "site gerador de senha";

        tituloDoProjeto.innerHTML = 'Gerador de Senha'
        DescricaoDoProjeto.innerHTML = 'bla bla'

        modal.style.display = 'flex'
        modal.show();
    }
}

function closeModal(){
    modal.close();
    modal.style.display = 'none'
}