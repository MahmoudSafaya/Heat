const audio = document.getElementById('myaudio');
const speechBtn = document.getElementById('speech-btn');

let isSpeaking = false;

speechBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(isSpeaking){
    audio.pause();
    speechBtn.classList.remove('speaking');
    isSpeaking = false;
  } else {
    audio.play();
    speechBtn.classList.add('speaking');
    isSpeaking = true;
  }
  e.altKey = true;
});


audio.addEventListener('ended', () => {
  speechBtn.classList.remove('speaking')

});