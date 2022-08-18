export default function Styles({
  btnSol,
  btnLua,
  btnFloresta,
  btnChuva,
  btnCafeteria,
  btnLareira,
}) {
  function activeDark() {
    document.body.classList.add("dark");
    btnLua.classList.add("dark");
    btnSol.classList.add("dark");
  }

  function desactiveDark() {
    document.body.classList.remove("dark");
    btnLua.classList.remove("dark");
    btnSol.classList.remove("dark");
  }

  function florestaClicked() {
    removeStyles();
    btnFloresta.classList.add("clicked");
  }

  function chuvaClicked() {
    removeStyles();
    btnChuva.classList.add("clicked");
  }

  function cafeteriaClicked() {
    removeStyles();
    btnCafeteria.classList.add("clicked");
  }

  function lareiraClicked() {
    removeStyles();
    btnLareira.classList.add("clicked");
  }

  function removeStyles() {
    btnFloresta.classList.remove("clicked");
    btnChuva.classList.remove("clicked");
    btnCafeteria.classList.remove("clicked");
    btnLareira.classList.remove("clicked");
  }

  return {
    activeDark,
    desactiveDark,
    florestaClicked,
    chuvaClicked,
    cafeteriaClicked,
    lareiraClicked,
    removeStyles,
  };
}
