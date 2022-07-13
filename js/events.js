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

export default function ({ styles, clock, sounds }) {
  btnSol.addEventListener("click", function () {
    styles.activeDark();
  });

  btnLua.addEventListener("click", function () {
    styles.desactiveDark();
  });

  btnPlay.addEventListener("click", function () {
    clock.countdown();
  })

  btnStop.addEventListener("click", function () {
    clock.hold()
  })

  btnMais.addEventListener("click", function () {
    clock.maisMinutos()
  })

  btnMenos.addEventListener("click", function () {
    clock.menosMinutos()
  })

  btnFloresta.addEventListener("click", function () {
    styles.florestaClicked();
    sounds.playFloresta()
  });

  btnChuva.addEventListener("click", function () {
    styles.chuvaClicked();
    sounds.playChuva()
  });

  btnCafeteria.addEventListener("click", function () {
    styles.cafeteriaClicked();
    sounds.playCafeteria()
  });

  btnLareira.addEventListener("click", function () {
    styles.lareiraClicked();
    sounds.playLareira()
  });
}
