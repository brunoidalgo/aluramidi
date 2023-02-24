function tocaSom (seletorAudio) {

    //Busca o seletor.
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        
        elemento.play();   
    } 
    else {
    
        console.log('Elemento inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');


//Para 
for (let contador = 0; contador < listaDeTeclas.length; contador++ ) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; // template String

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

}

    tecla.onkeyup = function(evento) {

            tecla.classList.remove('ativa');
    }

} 