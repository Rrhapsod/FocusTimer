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

  function setVolume(som, volume) {
    som.volume = volume.value / 10;
  }

  function playFloresta() {
    stopSounds();
    somFloresta.play();
    volArvore.addEventListener("input", setVolume(somFloresta, volArvore));
  }

  function playChuva() {
    stopSounds();
    somChuva.play();
    volChuva.addEventListener("input", setVolume(somChuva, volChuva));
  }

  function playCafeteria() {
    stopSounds();
    somCafeteria.play();
    volCafeteria.addEventListener(
      "input",
      setVolume(somCafeteria, volCafeteria)
    );
  }

  function playLareira() {
    stopSounds();
    somLareira.play();
    volLareira.addEventListener("input", setVolume(somLareira, volLareira));
  }

  function stopSounds() {
    somFloresta.pause();
    somChuva.pause();
    somCafeteria.pause();
    somLareira.pause();
  }

  function playTimer() {
    kitchenTimer.play();
  }

  return {
    playFloresta,
    playChuva,
    playCafeteria,
    playLareira,
    stopSounds,
    playTimer,
  };
}
