
export const funcLblInteraction = (id, imgSrc, groupName = "menu") => {
  const label = document.createElement("label");
  label.className = "bodyLblInteraction";

  label.innerHTML = `
    <input type="radio" name="${groupName}" id="${id}">
    <img src="${imgSrc}" alt="">
  `;

  return label;
};
