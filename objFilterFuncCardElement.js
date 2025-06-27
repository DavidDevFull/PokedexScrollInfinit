export const filterApi = (data) => ({
  name: data.name,
  id: data.id,
  img: data.sprites.versions["generation-v"]["black-white"].animated.front_default || 'fallback_image.png',
  element: data.types[0].type.name,
  height: data.height,
  weight: data.weight,
});

export const card = (name, id, img, element, height, weight) => {
  const sectionContain = document.querySelector('.sectionContain div:first-child ');
  if (!sectionContain) return console.warn("Container '.sectionContain' não encontrado!");

  const bodyCard = document.createElement('section');
  bodyCard.className = 'cardPokemon';

  bodyCard.innerHTML = `
    <div class="imgNamePokemon">
      <div>
          <span>#${id}</span>
          <h1>${name}</h1>
      </div>
      <img src="${img}" alt="">
    </div>
    <div class="informationPokemon">
  
      <span>Tipo: ${element}</span>
      <span>Altura: ${height}</span>
      <span>Peso: kl${weight}</span>
    </div>
  `;

  sectionContain.appendChild(bodyCard);
};