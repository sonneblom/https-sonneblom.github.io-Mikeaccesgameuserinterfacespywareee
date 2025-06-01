navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    console.log('Microphone access granted');
    // Do something with the audio stream
  })
  .catch(error => {
    console.error('Microphone access denied', error);
  });