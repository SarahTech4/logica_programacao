var nomes = []
var input = document.getElementById('input-nome')
var divLista = document.getElementById('lista')

function cadastrar() {
    var nomeDigitado = input.value;

    if (nomeDigitado == '') {
        alert('Por favor, digite um nome!');
        return; 
    }


    if (nomes.indexOf(nomeDigitado) != -1) {
        alert('O nome ' + nomeDigitado + ' já está na lista!');
        input.value = '';
        input.focus();
        return; 
    }

    nomes.push(nomeDigitado);
    
    input.value = '';
    input.focus();

    listar();
}

function listar() {
    divLista.innerHTML = ''; 

    for (var i = 0; i < nomes.length; i++) {
        
        divLista.innerHTML += '<p>Aluno: ' + nomes[i] + '</p>';
    }
}

function limpar() {
    nomes = []; 
    divLista.innerHTML = ''; 
    input.focus();
}