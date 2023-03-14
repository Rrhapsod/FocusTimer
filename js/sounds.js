import { volArvore, volCafeteria, volChuva, volLareira } from "./elements.js";

export default function () {
  const somFloresta = new Audio("audios/Floresta.wav");
  const somChuva = new Audio("audios/Chuva.wav");
  const somCafeteria = new Audio("audios/Cafeteria.wav");
  const somLareira = new Audio("audios/Lareira.wav");
  const kitchenTimer = new Audio("audios/kitchentimer.mp3");

  somFloresta.loop = true;
  somChuva.loop = true;
  somCafeteria.loop = true;
  somLareira.loop = true;

  const setVolume = (som, volume) => {
    som.volume = volume.value / 10;
  };

  const playFloresta = () => {
    stopSounds();
    somFloresta.play();
    volArvore.addEventListener("input", setVolume(somFloresta, volArvore));
  };

  const playChuva = () => {
    stopSounds();
    somChuva.play();
    volChuva.addEventListener("input", setVolume(somChuva, volChuva));
  };

  const playCafeteria = () => {
    stopSounds();
    somCafeteria.play();
    volCafeteria.addEventListener(
      "input",
      setVolume(somCafeteria, volCafeteria)
    );
  };

  const playLareira = () => {
    stopSounds();
    somLareira.play();
    volLareira.addEventListener("input", setVolume(somLareira, volLareira));
  };

  const stopSounds = () => {
    somFloresta.pause();
    somChuva.pause();
    somCafeteria.pause();
    somLareira.pause();
  };

  const playTimer = () => {
    kitchenTimer.play();
  };

  return {
    playFloresta,
    playChuva,
    playCafeteria,
    playLareira,
    stopSounds,
    playTimer,
  };
}
