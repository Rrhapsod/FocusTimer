
export default function Clock({ disMinutos, disSegundos, sounds}) {
  let timerTimeOut;
  let minutos;
  let segundos;

  function countdown() {
    timerTimeOut = setTimeout(function () {
      minutos = Number(disMinutos.textContent);
      segundos = Number(disSegundos.textContent);

      if (segundos == 0 && minutos == 0) {
        sounds.playTimer()
        hold();
        return;
      }

      if (segundos != 0) {
        segundos--;
        disSegundos.textContent = String(segundos).padStart(2, "0");
        countdown();
      } else {
        minutos--;
        disMinutos.textContent = String(minutos).padStart(2, "0");
        disSegundos.textContent = "59";
        countdown();
      }
    }, 1000);
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function maisMinutos() {
    minutos = Number(disMinutos.textContent) + 5;

    if (minutos >= 60) {
      minutos = 59;
    }

    disMinutos.textContent = String(minutos).padStart(2, "0");
  }

  function menosMinutos() {
    minutos = Number(disMinutos.textContent) - 5;

    if (minutos < 0) {
      minutos = 0;
    }

    disMinutos.textContent = String(minutos).padStart(2, "0");
  }

  return {
    countdown,
    hold,
    maisMinutos,
    menosMinutos,
  };
}
