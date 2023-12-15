const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

/* task 1 

colors.forEach((color) => {

  // erstellen eines neue div-elements
  const colorBox = document.createElement("div");

  // klasse zum div hinzufügen
  colorBox.classList.add("color-box");

  //setze die hintergrundfarbe des divs auf die aktuelle farbe
  colorBox.style.backgroundColor = color;

// füge das div dem body-element zu
  document.body.append(colorBox);
});*/ 

/* task 2 */ 

function renderColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  document.body.append(colorBox);
}

colors.forEach((color) => {
  renderColorBox(color);
})