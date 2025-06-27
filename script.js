import { filterApi, card } from "./objFilterFuncCardElement.js";

let offset = 0;
let limit = 75;
const loadedIds = new Set();

const fetchPokemon = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    const results = data.results;

    for (const pokemon of results) {
      const resDetail = await fetch(pokemon.url);
      const detailData = await resDetail.json();
      const filtered = filterApi(detailData);

      if (loadedIds.has(filtered.id)) {
        console.log(`Pulando duplicado: ${filtered.name} (ID ${filtered.id})`);
        continue;
      }

      loadedIds.add(filtered.id);

      card(
        filtered.name,
        filtered.id,
        filtered.img,
        filtered.element,
        filtered.height,
        filtered.weight
      );
    }

    offset += limit;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight + 5 >= document.body.scrollHeight) {
    fetchPokemon();
  }
});

fetchPokemon();
