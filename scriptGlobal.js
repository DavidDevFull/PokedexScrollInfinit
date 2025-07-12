import {
  fetchPokemonData,
  openPokemonDetailPage,
} from "./components/PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";

import { funcIpnSearchPokemon } from "./components/PastIpnSearchPokemon/funcIpnSearchPokemon.js";

import { funcLoadingScrollPokemon } from "./components/PastUtilitiesObjectAndFunction/funcLoadingScrollPokemon.js";
import {funcAsideBodyMenuScroll} from './components/PastMenuScroll/funcAsideBodyMenuScroll.js'
const limit = 25;
let offset = 0;
let isLoading = false;

funcIpnSearchPokemon(document.getElementById("headerSearch"), async (value) => {
  const data = await fetchPokemonData(value);
  openPokemonDetailPage(data);
  console.log(data, "Também executei outra ação!");
});

funcAsideBodyMenuScroll(document.getElementById("secGlobalElements"));

// Inicial
await funcLoadingScrollPokemon(
  document.getElementById("divContainScrollInfinit"),
  offset,
  limit
);
offset += limit;

// Scroll
window.addEventListener("scroll", async () => {
  if (
    window.innerHeight + window.scrollY >= document.body.scrollHeight &&
    !isLoading
  ) {
    isLoading = true;
    await funcLoadingScrollPokemon(divContainScrollInfinit, offset, limit);
    offset += limit;
    isLoading = false;
  }
});
