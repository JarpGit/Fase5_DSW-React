// Control de Audios Media Queries


// Obtén el elemento de audio y los botones de reproducción y pausa
const audioMediaQ = document.getElementById("myAudioMediaQ");
const playBtnMediaQ = document.getElementById("playBtnMediaQ");
const pauseBtnMediaQ = document.getElementById("pauseBtnMediaQ");

// Agrega un evento de clic al botón de reproducción para reproducir el audio
playBtnMediaQ.addEventListener("click", () => {
  audioMediaQ.play();
});

// Agrega un evento de clic al botón de pausa para pausar el audio
pauseBtnMediaQ.addEventListener("click", () => {
  audioMediaQ.pause();
});

// -------------------------------------------

// Control de Audios Box Model

// Obtén el elemento de audio y los botones de reproducción y pausa
const audioBoxM = document.getElementById("myAudioBoxM");
const playBtnBoxM = document.getElementById("playBtnBoxM");
const pauseBtnBoxM = document.getElementById("pauseBtnBoxM");

// Agrega un evento de clic al botón de reproducción para reproducir el audio
playBtnBoxM.addEventListener("click", () => {
  audioBoxM.play();
});

// Agrega un evento de clic al botón de pausa para pausar el audio
pauseBtnBoxM.addEventListener("click", () => {
  audioBoxM.pause();
});