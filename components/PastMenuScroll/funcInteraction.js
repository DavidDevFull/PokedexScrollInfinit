
// Chamar caixa de texto
export const funcCallInputSearch = () => {
  let themeCurrent = "../../image/iconMenu/magnifying_Theme_Glass_Dark.png";

  const btnCallInputSearch = document.createElement("button");
  btnCallInputSearch.classList = "btnCallInputSearch";
  btnCallInputSearch.innerHTML = `
    <img src=${themeCurrent} alt="">
  `;
  return btnCallInputSearch;
};

// Tipos de pokemon
export const funclblTypes = (id, imgSrc, groupName = "menu") => {
  const lblTypes = document.createElement("label");
  lblTypes.className = "lblTypes";

  lblTypes.innerHTML = `
    <input type="radio" name="${groupName}" id="${id}">
    <img src="${imgSrc}" alt="">
  `;

  return lblTypes;
};

// Abrir ou fechar menu
export const funcOpenOrClosedMenu = () => {
  const imgButton = "../../image/iconMenu/icon_Menu.png";

  const btnOpenOrClosedMenu = document.createElement("button");
  btnOpenOrClosedMenu.className = "btnOpenOrClosedMenu";
  btnOpenOrClosedMenu.innerHTML = `
    <img src=${imgButton} alt="Abrir e fechar menu">
  `;
  return btnOpenOrClosedMenu;
};

// Troca de tema
export const funcReplacementTheme = (themeClass = "") => {
  const btnReplacementTheme = document.createElement("button");
  btnReplacementTheme.className = "btnReplacementTheme";

  const themeIcons = [
    "../../image/iconMenu/background_Theme_Of_Course.png",
    "../../image/iconMenu/background_Theme_Dark.png",
  ];

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  const isDarkInitial = document.body.classList.contains("dark");
  btnReplacementTheme.innerHTML = `
    <img src="${
      isDarkInitial ? themeIcons[1] : themeIcons[0]
    }" alt="Ícone de tema">
  `;

  btnReplacementTheme.addEventListener("click", () => {
    document.querySelectorAll(themeClass).forEach((el) => {
      el.classList.toggle("dark");
    });

    const isDarkNow = document.body.classList.contains("dark");

    btnReplacementTheme.innerHTML = `
      <img src="${
        isDarkNow ? themeIcons[1] : themeIcons[0]
      }" alt="Ícone de tema">
    `;

    localStorage.setItem("theme", isDarkNow ? "dark" : "light");
  });

  return btnReplacementTheme;
};

// Ir para aba de favoritos
export const funcFavoritePokemon = () => {
  const imgButton = "../../image/iconMenu/Icon_Favorite_Pokemon.png";

  const btnFavoritePokemon = document.createElement("button");
  btnFavoritePokemon.innerHTML = `
    <img src=${imgButton} alt="Pokémon favorito">
  `;
  btnFavoritePokemon.className = "btnFavoritePokemon";
  return btnFavoritePokemon;
};
