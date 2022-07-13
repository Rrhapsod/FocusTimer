import { volArvore, volCafeteria, volChuva, volLareira } from "./elements.js";

export default function () {
  const somFloresta = new Audio("audios/Floresta.wav");
  const somChuva = new Audio("audios/Chuva.wav");
  const somCafeteria = new Audio("audios/Cafeteria.wav");
  const somLareira = new Audio("audios/Lareira.wav");

  somFloresta.loop = true;
  somChuva.loop = true;
  somCafeteria.loop = true;
  somLareira.loop = true;

  function setVolume(som, volume) {
    som.volume = volume.value / 10;
  }

  function playFloresta() {
    somFloresta.play();
    somChuva.pause();
    somCafeteria.pause();
    somLareira.pause();
    volArvore.addEventListener("mousemove", setVolume(somFloresta, volArvore));
  }

  function playChuva() {
    somFloresta.pause();
    somChuva.play();
    somCafeteria.pause();
    somLareira.pause();
    volChuva.addEventListener("mousemove", setVolume(somChuva, volChuva));
  }

  function playCafeteria() {
    somFloresta.pause();
    somChuva.pause();
    somCafeteria.play();
    somLareira.pause();
    volCafeteria.addEventListener(
      "mousemove",
      setVolume(somCafeteria, volCafeteria)
    );
  }

  function playLareira() {
    somFloresta.pause();
    somChuva.pause();
    somCafeteria.pause();
    somLareira.play();
    volLareira.addEventListener("mousemove", setVolume(somLareira, volLareira));
  }

  return {
    playFloresta,
    playChuva,
    playCafeteria,
    playLareira,
  };
}
