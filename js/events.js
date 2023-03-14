import {
  btnCafeteria,
  btnChuva,
  btnFloresta,
  btnLareira,
  btnLua,
  btnMais,
  btnMenos,
  btnPlay,
  btnSol,
  btnStop,
} from "./elements.js";

let isClicked = false;
let timerClicked = false;

export default function ({ styles, clock, sounds }) {
  btnSol.addEventListener("click", function () {
    styles.activeDark();
  });

  btnLua.addEventListener("click", function () {
    styles.desactiveDark();
  });

  btnPlay.addEventListener("click", function () {
    if (!timerClicked) {
      timerClicked = true;
      clock.countdown();
    }
  });

  btnStop.addEventListener("click", function () {
    if (timerClicked) {
      timerClicked = false;
      clock.hold();
    }
  });

  btnMais.addEventListener("click", function () {
    clock.maisMinutos();
  });

  btnMenos.addEventListener("click", function () {
    clock.menosMinutos();
  });

  btnFloresta.addEventListener("click", function () {
    if (isClicked) {
      styles.removeStyles();
      sounds.stopSounds();
      isClicked = false;
    } else {
      styles.florestaClicked();
      sounds.playFloresta();
      isClicked = true;
    }
  });

  btnChuva.addEventListener("click", function () {
    if (isClicked) {
      styles.removeStyles();
      sounds.stopSounds();
      isClicked = false;
    } else {
      styles.chuvaClicked();
      sounds.playChuva();
      isClicked = true;
    }
  });

  btnCafeteria.addEventListener("click", function () {
    if (isClicked) {
      styles.removeStyles();
      sounds.stopSounds();
      isClicked = false;
    } else {
      styles.cafeteriaClicked();
      sounds.playCafeteria();
      isClicked = true;
    }
  });

  btnLareira.addEventListener("click", function () {
    if (isClicked) {
      styles.removeStyles();
      sounds.stopSounds();
      isClicked = false;
    } else {
      styles.lareiraClicked();
      sounds.playLareira();
      isClicked = true;
    }
  });
}
