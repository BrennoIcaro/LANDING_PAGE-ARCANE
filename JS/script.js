const video = document.getElementById('arcaneBackg');
const button = document.getElementById('btn-pause');

button.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        button.textContent = 'PAUSAR VIDEO';
    } else {
        video.pause();
        button.textContent = 'REPRODUZIR VIDEO';
    }
});