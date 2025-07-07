import { funcLblInteraction } from "./funcLblInteraction.js";

export const funcMenuScroll = (inserirInTag) => {

  const bodyMenuScroll = document.createElement("div");
  bodyMenuScroll.className = "styleBodyScroll";

  // Criar vários labels com parâmetros diferentes
  const labels = [
    funcLblInteraction("search", "../../image/iconMenu/magnifying_Theme_Glass_Dark.png"),
    funcLblInteraction("element", "../../image/iconsTypePokemon/iconElemental.png",''),
    funcLblInteraction("menuInformationSite", "../../image/iconMenu/icon_Arrow.png",''),
    funcLblInteraction("theme", "../../image/iconMenu/theme_Dark.png",''),
    funcLblInteraction("favorite", "../../image/iconMenu/Icon_Favorite_Pokemon.png",''),
    
  ];

  // Adicionar todos os labels no container
  labels.forEach(label => bodyMenuScroll.appendChild(label));

  inserirInTag.appendChild(bodyMenuScroll);
};