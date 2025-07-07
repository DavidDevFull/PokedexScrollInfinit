import { searchAndOpenPokemon } from "../PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";

export const funcCardPokemon = (InsertTagIn, data) => {
  const bodyCard = document.createElement("section");
  bodyCard.className = "cardPokemon";

  const typeColorMap = {
    fire: "var(--colorTypeFire)",
    water: "var(--colorTypeWater)",
    grass: "var(--colorTypeGram)",
    flying: "var(--colorTypeFlying)",
    fighting: "var(--colorTypeFighter)",
    poison: "var(--colorTypePoison)",
    electric: "var(--colorTypeElectric)",
    ground: "var(--colorTypeEarth)",
    psychic: "var(--colorTypePsychic)",
    ice: "var(--colorTypeIce)",
    bug: "var(--colorTypeInsect)",
    ghost: "var(--colorTypeGhost)",
    steel: "var(--colorTypeSteel)",
    dragon: "var(--colorTypeDragon)",
    dark: "var(--colorTypeDingy)",
    fairy: "var(--colorTypeFairy)",
    rock: "var(--colorTypeEarth)",
    normal: "#A8A77A",
  };

  const typeImgMap = {
    dark: "../../image/iconsTypePokemon/iconDark.png",
    dragon: "../../image/iconsTypePokemon/iconDragon.png",
    electric: "../../image/iconsTypePokemon/iconElectric.png",
    fairy: "../../image/iconsTypePokemon/iconFairy.png",
    fighting: "../../image/iconsTypePokemon/iconFighting.png",
    fire: "../../image/iconsTypePokemon/iconFire.png",
    flying: "../../image/iconsTypePokemon/iconFlying.png",
    ghost: "../../image/iconsTypePokemon/iconGhost.png",
    grass: "../../image/iconsTypePokemon/iconGrass.png",
    ground: "../../image/iconsTypePokemon/iconGround.png",
    ice: "../../image/iconsTypePokemon/iconIce.png",
    bug: "../../image/iconsTypePokemon/iconInsect.png",
    normal: "../../image/iconsTypePokemon/iconNormal.png",
    poison: "../../image/iconsTypePokemon/iconPoison.png",
    psychic: "../../image/iconsTypePokemon/iconPsychic.png",
    rock: "../../image/iconsTypePokemon/iconRock.png",
    steel: "../../image/iconsTypePokemon/iconSteel.png",
    water: "../../image/iconsTypePokemon/iconWater.png",
  };

  const { name, id, img, types } = data;

  const mainType = types[0];
  const colorMain = typeColorMap[mainType];
  const iconMain = typeImgMap[mainType];

  const secondType = types[1];
  const secondColor = secondType ? typeColorMap[secondType] : "";
  const iconSecond = secondType ? typeImgMap[secondType] : "";

  // Monta dinamicamente os <img>
  const iconsHTML = `
    <img src="${iconMain}">
    ${secondType ? `<img src="${iconSecond}">` : ""}
  `;

  // Monta o HTML
  bodyCard.innerHTML = `
    <div class="imgNamePokemon">
      <div>
        <h2 class="pokemonName">${name} | #${id}</h2>
      </div>
      <img src="${img}">
    </div>
    <div class="infoTypeIconPokemon">
      <div>${iconsHTML}</div>
      <div>
        <span class="type1">${mainType}</span>
        ${secondType ? ` / <span class="type2">${secondType}</span>` : ""}
      </div>
    </div>
  `;

  // Aplica cor ao nome
  const nameElement = bodyCard.querySelector(".pokemonName");
  nameElement.style.color = colorMain;

  // Aplica cor ao span do primeiro tipo
  const spanType1 = bodyCard.querySelector(".type1");
  spanType1.style.color = colorMain;

  // Aplica cor ao span do segundo tipo, se existir
  const spanType2 = bodyCard.querySelector(".type2");
  if (spanType2) {
    spanType2.style.color = secondColor;
  }

  // Evento de clique
  bodyCard.addEventListener("click", async () => {
    console.log(`Pokémon ${name} foi clicado`);
    await searchAndOpenPokemon(name);
  });

  InsertTagIn.appendChild(bodyCard);
};
