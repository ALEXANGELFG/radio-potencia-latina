// Control del reproductor de radio
const playButton = document.getElementById('play-button');
const radioStream = document.getElementById('radio-stream');

playButton.addEventListener('click', () => {
    if (radioStream.paused) {
        radioStream.play();
        playButton.textContent = '⏸️ Pausar';
    } else {
        radioStream.pause();
        playButton.textContent = '▶️ Escuchar en Vivo';
    }
});

// Validación del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias por contactarnos, ' + name + '. Nos pondremos en contacto contigo pronto.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});