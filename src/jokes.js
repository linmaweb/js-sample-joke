import { buttonElement, apiUrl, voiceRSSConfig } from './variables';
import { VoiceRSS } from './voiceRSS';

const toggleButton = () => {
  buttonElement.disabled = !buttonElement.disabled;
}

const tellJoke = (joke) => {
  const jokeString = joke.trim().replace(/ /g, '%20');
  VoiceRSS.speech({
    ...voiceRSSConfig,
    src: jokeString
  });
}

const getJokes = async () => {
  let joke = '';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellJoke(joke);
    toggleButton();
  } catch (error) {
    console.log(error)
  }
}

export { toggleButton, getJokes }