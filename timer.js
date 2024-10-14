// Função global 
function clock(){

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
    document.addEventListener('click', function(e){
        const el = e.target;

        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startClock();
    }

        if (el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
    }

        if (el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            seconds = 0;
    }


})
}
clock();
