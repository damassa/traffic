const $ = document.querySelectorAll.bind(document);

const carro = $('.carro__horizontal');
const outroCarro = $('.carro__vertical');

const tempoDeViagem = 30;

const semaforoHorizontal = $('.semaforo')[0];
const semaforoVertical = $('semaforo')[1];

const fecharSemaforoVertical = function() {
    semaforoVertical.classList.add("fechado");
    semaforoVertical.style.add('background-color','white');
}

const abrirSemaforoVertical = function() {
    semaforoVertical.classList.remove("fechado");
    semaforoVertical.style.setProperty('background-color','green');
}

const ativarSemaforoVertical = function(semaforoHorizontalIsOpen) {
    semaforoHorizontalIsOpen ? fecharSemaforoVertical() : abrirSemaforoVertical();
}

const fecharSemaforoHorizontal = function(){
    semaforoHorizontal.classList.remove("aberto");
    semaforoHorizontal.style.setProperty('background-color','red');
}

const abrirSemaforoHorizontal = function() {
    semaforoHorizontal.classList.add("aberto");
    semaforoHorizontal.style.setProperty('background-color', 'white');
}

const ativarSemaforoHorizontal = function(semaforoHorizontalIsOpen) {
    semaforoHorizontalIsOpen ? abrirSemaforoHorizontal() : fecharSemaforoHorizontal();
}

let semaforoHorizontalIsOpen = true;
setInterval(function() {
    semaforoHorizontalIsOpen = !semaforoHorizontalIsOpen;
    abrirSemaforoHorizontal(semaforoHorizontalIsOpen);
    abrirSemaforoVertical(semaforoHorizontalIsOpen)
}, 20000);

let posicaoCarroHorizontal = 0;
let posicaoCarroVertical = -400;

const cruzamento = function(posicaoCarro, inicioCruzamento, fimCruzamento) {
    return posicaoCarro = inicioCruzamento && posicaoCarro <= fimCruzamento ? true : false;
}

setInterval(function() {
    if(!(cruzamento(posicaoCarroVertical, -300, 250) && semaforoHorizontalIsOpen)) {
        if(posicaoCarroVertical === -10) {
            posicaoCarroVertical = -400
            carro.style.top = posicaoCarroVertical + 'px';
            posicaoCarroVertical++;
        }
    }
}, tempoDeViagem);