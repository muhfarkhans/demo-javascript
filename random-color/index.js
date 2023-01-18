function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();
  const rgbNumber = ` rgb(${red}, ${green}, ${blue}) `;
  document.getElementById("previewColor").style.backgroundColor = rgbNumber;
  document.getElementById("rgbNumberText").textContent = rgbNumber;

  console.log(rgbNumber);
}

function runApp() {
  changeColor();
}

runApp();
