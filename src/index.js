import { buttonElement, audioElement } from './variables';
import { toggleButton, getJokes } from './jokes';

buttonElement.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);