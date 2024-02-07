document.addEventListener('DOMContentLoaded', function () {
    const animatedP = document.getElementById('animatedP');

    // Adiciona a classe 'animate' após um pequeno atraso
    setTimeout(function () {
        animatedP.classList.add('animate');
    }, 100);
});
