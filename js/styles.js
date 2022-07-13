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
    btnFloresta.classList.add("clicked");
    btnChuva.classList.remove("clicked");
    btnCafeteria.classList.remove("clicked");
    btnLareira.classList.remove("clicked");
  }

  function chuvaClicked() {
    btnFloresta.classList.remove("clicked");
    btnChuva.classList.add("clicked");
    btnCafeteria.classList.remove("clicked");
    btnLareira.classList.remove("clicked");
  }

  function cafeteriaClicked() {
    btnFloresta.classList.remove("clicked");
    btnChuva.classList.remove("clicked");
    btnCafeteria.classList.add("clicked");
    btnLareira.classList.remove("clicked");
  }

  function lareiraClicked() {
    btnFloresta.classList.remove("clicked");
    btnChuva.classList.remove("clicked");
    btnCafeteria.classList.remove("clicked");
    btnLareira.classList.add("clicked");
  }

  return {
    activeDark,
    desactiveDark,
    florestaClicked,
    chuvaClicked,
    cafeteriaClicked,
    lareiraClicked,
  };
}
