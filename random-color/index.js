const randomNumber = () => Math.floor(Math.random() * 256);
function changeColor() {
  let rgbNumber = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  document.getElementById("previewColor").style.backgroundColor = rgbNumber;

  console.log(rgbNumber);
}

changeColor();
