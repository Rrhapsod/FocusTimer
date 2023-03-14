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

const clock = Clock({
  disMinutos,
  disSegundos,
  sounds,
});

const sounds = Sounds();

Events({ styles, clock, sounds });
