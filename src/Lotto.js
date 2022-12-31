function lottery() {
  var number;
  for (var i = 0; i < 7; i++) {
    number = Math.floor(Math.random() * 44) + 1;
    setTimeout(function () {}, 1000);
    console.log(number);
  }
  const numberText = document.getElementById("number");
  numberText.innerHTML = "<div>text</div>";
}
