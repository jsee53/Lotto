var lottoNumber = [];
var trList = document.getElementById("numberTable").getElementsByTagName("tr");

function lottery() {
  var number;
  for (var i = 0; i < 6; i++) {
    number = Math.floor(Math.random() * 45) + 1;
    while (!duplicationCheck(number)) {
      number = Math.floor(Math.random() * 45) + 1;
    }
    lottoNumber[i] = number;
    sleep();

    var tr = trList[0];
    var tdList = trList.getElementsByTagName("td")[i];
    tdList.innerText = lottoNumber[i];
    console.log(number);
  }
}

//1초 딜레이 하는 함수
function sleep() {
  let start = Date.now();
  let now = start;
  while (now < start + 1000) {
    now = Date.now();
  }
}

//랜덤 생성한 번호의 중복을 확인하는 함수
function duplicationCheck(num) {
  for (var i = 0; i < lottoNumber.length; i++) {
    if (lottoNumber[i] == num) {
      return false;
    }
  }
  return true;
}
