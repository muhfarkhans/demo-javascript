const randomNumber = () => Math.floor(Math.random() * 256);
function changeColor() {
  let rgbNumber = ` rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()}) `;
  document.getElementById("previewColor").style.backgroundColor = rgbNumber;
  document.getElementById("rgbNumberText").textContent = rgbNumber;

  console.log(rgbNumber);
}

function runApp() {
  changeColor();
}

runApp();
