const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const input = event.currentTarget.value.trim();
  const output = input.length > 0 ? input : "Anonymous";

  nameOutput.textContent = output;
});
