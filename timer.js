// Função para inicializar as horas corretas
function createSeconds (seconds) {
    const data = new Date (seconds * 1000); // A engine do JS sempre conta em Milisegundos 
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

// Criar constante para selecionar o relogio/ iniciar / pausar / zerar 
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seconds = 0; // Variável para manter um estado 
let timer; // Variável para iniciar a função 

// Função para iniciar o relógio 
function startClock() {
    timer = setInterval(function() {
        seconds++;
        relogio.innerHTML = createSeconds(seconds);
    }, 1000);
}

// Chamada da função para iniciar o timer 
iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    startClock();
})  

// Pausar o timer e zerar 
pausar.addEventListener('click', function(event){
    clearInterval(timer);
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
});