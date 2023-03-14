export default function Styles({
  btnSol,
  btnLua,
  btnFloresta,
  btnChuva,
  btnCafeteria,
  btnLareira,
}) {
  const activeDark = function () {
    document.body.classList.add("dark");
    btnLua.classList.add("dark");
    btnSol.classList.add("dark");
  };

  const desactiveDark = function () {
    document.body.classList.remove("dark");
    btnLua.classList.remove("dark");
    btnSol.classList.remove("dark");
  };

  const florestaClicked = () => {
    removeStyles();
    btnFloresta.classList.add("clicked");
  };

  const chuvaClicked = () => {
    removeStyles();
    btnChuva.classList.add("clicked");
  };

  const cafeteriaClicked = () => {
    removeStyles();
    btnCafeteria.classList.add("clicked");
  };

  const lareiraClicked = () => {
    removeStyles();
    btnLareira.classList.add("clicked");
  };

  const removeStyles = () => {
    btnFloresta.classList.remove("clicked");
    btnChuva.classList.remove("clicked");
    btnCafeteria.classList.remove("clicked");
    btnLareira.classList.remove("clicked");
  };

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
