var clock = 0;

function lottery() {
  var number;
  number = Math.floor(Math.random() * 44) + 1;
  if (clock <= 6) {
    console.log(number);
    clock++;
    setTimeout(lottery(), 1000);
  }
  const numberText = document.getElementById("number");
  numberText.innerHTML = "<div>text</div>";
}
