const playButton = window.document.querySelector('.play-button');
let audio = new Audio();
audio.src = './assets/music1.mp3';

playButton.addEventListener('click', () => { 
    audio.play();
} );