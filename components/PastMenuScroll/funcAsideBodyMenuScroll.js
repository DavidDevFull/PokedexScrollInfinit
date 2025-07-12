import { funcReplacementTheme, 
  funcOpenOrClosedMenu, funcFavoritePokemon,funcCallInputSearch, funclblTypes
} from './funcInteraction.js'

export const funcAsideBodyMenuScroll = (inserirInTag) => {

  const asideBodyMenuScroll = document.createElement("aside");
  asideBodyMenuScroll.className = "asideBodyMenuScroll";

  // Criar vários labels com parâmetros diferentes
  const labels = [
    funcCallInputSearch(),
    funclblTypes("element", "../../image/iconsTypePokemon/iconElemental.png",''),
    funcOpenOrClosedMenu(),
    funcReplacementTheme(`
    body, 
    #headerSearch,
    .ipnSearchPokemon, 
    #secGlobalElements, 
    .cardPokemon, 
    .cardPokemon div, 
    .imgNamePokemon, 
    #footerMenu, 
    .asideBodyMenuScroll button,
    .asideBodyMenuScroll label`),
    funcFavoritePokemon(),
    
  ];

  // Adicionar todos os labels no container
  labels.forEach(label => asideBodyMenuScroll.appendChild(label));

  inserirInTag.appendChild(asideBodyMenuScroll);
};