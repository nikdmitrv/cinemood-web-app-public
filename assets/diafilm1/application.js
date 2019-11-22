function audioConstructor(count) {
  const container = document.querySelector('.diafilm-player-button-container');
  container.removeChild(document.querySelector('.diafilm-player-audio-controls'));
  const newAudio = document.createElement('audio');
  const newAudioSource = document.createElement('source');
  newAudioSource.src = `/diafilms/${count}.wav`;
  newAudioSource.type = 'audio/wav';
  newAudio.appendChild(newAudioSource);
  newAudio.controls = true;
  newAudio.classList.add('diafilm-player-audio-controls');
  container.appendChild(newAudio);
}
let counter = 1;
document.addEventListener('click', e => {
  if (e.target.classList.contains('diafilm-player-button-next') && counter < 3) {
    counter += 1;
    document.querySelector('.diafilm-player-display').src = `/diafilms/${counter}.jpg`;
    audioConstructor(counter);
  }
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('diafilm-player-button-prev') && counter !== 1) {
    counter -= 1;
    document.querySelector('.diafilm-player-display').src = `/diafilms/${counter}.jpg`;
    audioConstructor(counter)
  }
});