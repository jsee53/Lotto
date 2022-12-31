function lottery() {
  var number;
  for (var i = 0; i < 6; i++) {
    number = Math.floor(Math.random() * 44) + 1;
  }
  const numberText = document.getElementById("number");
  numberText.innerHTML = "<div>text</div>";
}
