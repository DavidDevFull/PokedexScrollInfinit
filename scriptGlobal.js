import {fetchPokemonData , openPokemonDetailPage} from './components/PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js'

import { funcIpnSearchPokemon } from './components/PastIpnSearchPokemon/funcIpnSearchPokemon.js';

import { funcLoadingScrollPokemon } from './components/PastUtilitiesObjectAndFunction/funcLoadingScrollPokemon.js';
import { funcMenuScroll } from './components/PastMenuScroll/funcMenuScroll.js';
import { funcFooterMenu } from './components/PastFooterMenu/funcFooterMenu.js';

const limit = 50;
let offset = 0;
let isLoading = false;

funcIpnSearchPokemon(
    document.getElementById('headerSearch')
    , async (value) => {
    const data = await fetchPokemonData(value);
    openPokemonDetailPage(data);
    console.log(data, "Também executei outra ação!");
  });

funcMenuScroll(document.getElementById('sectionContain'));
funcFooterMenu(document.getElementById('footerMenu'));

// Inicial
await funcLoadingScrollPokemon(document.getElementById('divContainScrollInfinit'), offset, limit);
offset += limit;

// Scroll
window.addEventListener("scroll", async () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight && !isLoading) {
    isLoading = true;
    await funcLoadingScrollPokemon(divContainScrollInfinit, offset, limit);
    offset += limit;
    isLoading = false;
  }
});
