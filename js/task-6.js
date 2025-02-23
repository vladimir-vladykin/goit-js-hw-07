const MIN_BOX_NUMBER = 1;
const MAX_BOX_NUMBER = 100;
const boxNumberInput = document.querySelector("#controls input");
const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createButton.addEventListener("click", (event) => {
  handleCreateClick();
});
destroyButton.addEventListener("click", (event) => {
  handleDestroyClick();
});

function handleDestroyClick() {
  boxContainer.innerHTML = "";
}

function handleCreateClick() {
  const rawNumber = boxNumberInput.value;
  const number = Number(rawNumber);

  if (number < MIN_BOX_NUMBER || number > MAX_BOX_NUMBER) {
    return;
  }

  boxContainer.innerHTML = createBoxes(number);
  boxNumberInput.value = "";
}

function createBoxes(amount) {
  const rawMarkupArray = [];
  const sizeStep = 10;
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const backgroundColor = getRandomHexColor();
    rawMarkupArray.push(
      `
      <div style="background-color: ${backgroundColor}; width: ${size}px; height: ${size}px">
      </div>
      `
    );

    size += sizeStep;
  }

  return rawMarkupArray.join("");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
