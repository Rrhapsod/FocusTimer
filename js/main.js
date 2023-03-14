import {
  btnCafeteria,
  btnChuva,
  btnFloresta,
  btnLareira,
  disMinutos,
  disSegundos,
  btnLua,
  btnSol,
} from "./elements.js";
import Events from "./events.js";
import Styles from "./styles.js";
import Clock from "./clock.js";
import Sounds from "./sounds.js";

const styles = Styles({
  btnSol,
  btnLua,
  btnFloresta,
  btnChuva,
  btnCafeteria,
  btnLareira,
});

const sounds = Sounds();

const clock = Clock({
  disMinutos,
  disSegundos,
  sounds,
});

Events({ styles, clock, sounds });
