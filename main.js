const $ = document.querySelectorAll.bind(document);

const carro = $('.carro__vertical')[0];
const outroCarro = $('.carro__horizontal')[0];

const tempoDeViagem = 25;

const semaforoVertical = $('.semaforo')[0];
const semaforoHorizontal = $('.semaforo')[1];

const fecharSemaforoVertical = function() {
    semaforoVertical.classList.add("fechado");
    semaforoVertical.style.add('--background','white');
}

const abrirSemaforoVertical = function() {
    semaforoVertical.classList.remove("fechado");
    semaforoVertical.style.setProperty('--background','green');
}

const ativarSemaforoVertical = function(semaforoHorizontalIsOpen) {
    semaforoHorizontalIsOpen ? fecharSemaforoVertical() : abrirSemaforoVertical();
}

const fecharSemaforoHorizontal = function() {
    semaforoHorizontal.classList.remove("aberto");
    semaforoHorizontal.style.setProperty('--background','red');
}

const abrirSemaforoHorizontal = function() {
    semaforoHorizontal.classList.add("aberto");
    semaforoHorizontal.style.setProperty('--background', 'white');
}

const ativarSemaforoHorizontal = function(semaforoHorizontalIsOpen) {
    semaforoHorizontalIsOpen ? abrirSemaforoHorizontal() : fecharSemaforoHorizontal();
}

let semaforoHorizontalIsOpen = true;
setInterval(function() {
    semaforoHorizontalIsOpen = !semaforoHorizontalIsOpen;
    abrirSemaforoHorizontal(semaforoHorizontalIsOpen);
    abrirSemaforoVertical(semaforoHorizontalIsOpen)
}, 10000);

let posicaoCarroHorizontal = 0;
let posicaoCarroVertical = -400;

const cruzamento = function(posicaoCarro, inicioCruzamento, fimCruzamento) {
    return posicaoCarro >= inicioCruzamento && posicaoCarro <= fimCruzamento ? true : false;
}

setInterval(function() {
    if(!(cruzamento(posicaoCarroVertical, -300, -260) && semaforoHorizontalIsOpen)) {
        if(posicaoCarroVertical === -10) posicaoCarroVertical = -460
            carro.style.top = posicaoCarroVertical + 'px';
            posicaoCarroVertical++;
    }

    if(!(cruzamento(posicaoCarroHorizontal, 150, 190) && !semaforoHorizontalIsOpen)) {
        if(posicaoCarroHorizontal === 500) posicaoCarroHorizontal = -10
            outroCarro.style.left = posicaoCarroHorizontal + 'px';
            posicaoCarroHorizontal++;
    }
}, tempoDeViagem);