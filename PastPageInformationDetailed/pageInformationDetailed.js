import {
  fetchPokemonData,
  openPokemonDetailPage,
} from "../components/PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";

import { funcLoadingScrollPokemon } from "../components/PastUtilitiesObjectAndFunction/funcLoadingScrollPokemon.js";

import { funcIpnSearchPokemon } from "../components/PastIpnSearchPokemon/funcIpnSearchPokemon.js";
import { funcAsideBodyMenuScroll } from "../components/PastMenuScroll/funcAsideBodyMenuScroll.js";
import { funcSumAboutPokemon } from "../components/PastSumAboutPokemon/funcSumAboutPokemon.js";

funcIpnSearchPokemon(document.getElementById("headerSearch"), async (value) => {
  const data = await fetchPokemonData(value);
  openPokemonDetailPage(data);
  console.log(data, "Também executei outra ação!");
});
funcAsideBodyMenuScroll(document.getElementById("secGlobalElements"));
funcSumAboutPokemon(document.getElementById("divDetailPokemon"));

const limit = 25;
const maxOffset = 649 - limit;

const numberRandom = Math.floor(Math.random() * maxOffset);

funcLoadingScrollPokemon(
  document.getElementById("divSuggestionRandomPokemon"),
  numberRandom,
  limit
);
