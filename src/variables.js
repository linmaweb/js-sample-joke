const buttonElement = document.getElementById('button');
const audioElement = document.getElementById('audio');

const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';

const voiceRSSConfig = {
    key: 'e985f868e96c46d9b0789c3855350152', // free API key for testing purpose only
    hl: 'en-us',
    r: 1,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  }

export {
  buttonElement,
  audioElement,
  apiUrl,
  voiceRSSConfig
};
