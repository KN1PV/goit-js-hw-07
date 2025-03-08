function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBody = document.querySelector("body");
const colorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorBody.style.backgroundColor = color;
  colorText.textContent = color;
});
