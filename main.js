set2fig = (num) => {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  let ret;
  if (num < 10) {
    ret = "0" + num;
  } else {
    ret = num;
  }
  return ret;
};

var nowTime = new Date(); //  現在日時を得る
var nowHour = set2fig(nowTime.getHours()); // 時を抜き出す
var nowMin = set2fig(nowTime.getMinutes()); // 分を抜き出す
var nowSec = set2fig(nowTime.getSeconds()); // 秒を抜き出す
var msg = "現在の時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
document.getElementById("RealtimeClockArea").innerHTML = msg;

RealTime = () => {
  var nowTime = new Date(); //  現在日時を得る
  var nowHour = set2fig(nowTime.getHours()); // 時を抜き出す
  var nowMin = set2fig(nowTime.getMinutes()); // 分を抜き出す
  var nowSec = set2fig(nowTime.getSeconds()); // 秒を抜き出す
  var msg =
    "現在の時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("RealtimeClockArea").innerHTML = msg;
};

setInterval(RealTime, 1000);

const lang_btn = document.getElementById("lang_btn");
const greeting = document.getElementById("greeting");
const ja = document.querySelectorAll(".ja");
const en = document.querySelectorAll(".en");
const cn = document.querySelectorAll(".cn");
const numNowHour = Number(nowHour);

if (numNowHour <= 4) {
  greeting.textContent = "こんばんは！";
} else if (numNowHour <= 10) {
  greeting.textContent = "おはようございます！";
} else if (numNowHour <= 16) {
  greeting.textContent = "こんにちは！";
} else if (numNowHour <= 24) {
  greeting.textContent = "こんばんは！";
}

lang_btn.addEventListener("click", () => {
  if (lang_btn.textContent == "EN") {
    if (numNowHour <= 4) {
      en[0].classList.add("none");
      en[1].classList.add("none");
      en[2].classList.remove("none");
    } else if (numNowHour <= 10) {
      en[0].classList.remove("none");
      en[1].classList.add("none");
      en[2].classList.add("none");
    } else if (numNowHour <= 16) {
      en[0].classList.add("none");
      en[1].classList.remove("none");
      en[2].classList.add("none");
    } else if (numNowHour <= 24) {
      en[0].classList.add("none");
      en[1].classList.add("none");
      en[2].classList.remove("none");
    }
    ja.forEach((element) => element.classList.add("none"));
    greeting.textContent = "";
    lang_btn.textContent = "CN";
  } else if (lang_btn.textContent == "CN") {
    if (numNowHour <= 4) {
      cn[0].classList.add("none");
      cn[1].classList.add("none");
      cn[2].classList.remove("none");
    } else if (numNowHour <= 10) {
      cn[0].classList.remove("none");
      cn[1].classList.add("none");
      cn[2].classList.add("none");
    } else if (numNowHour <= 16) {
      cn[0].classList.add("none");
      cn[1].classList.remove("none");
      cn[2].classList.add("none");
    } else if (numNowHour <= 24) {
      cn[0].classList.add("none");
      cn[1].classList.add("none");
      cn[2].classList.remove("none");
    }
    en.forEach((element) => element.classList.add("none"));
    lang_btn.textContent = "JA";
  } else if (lang_btn.textContent == "JA") {
    if (numNowHour <= 4) {
      ja[0].classList.add("none");
      ja[1].classList.add("none");
      ja[2].classList.remove("none");
    } else if (numNowHour <= 10) {
      ja[0].classList.remove("none");
      ja[1].classList.add("none");
      ja[2].classList.add("none");
    } else if (numNowHour <= 16) {
      ja[0].classList.add("none");
      ja[1].classList.remove("none");
      ja[2].classList.add("none");
    } else if (numNowHour <= 24) {
      ja[0].classList.add("none");
      ja[1].classList.add("none");
      ja[2].classList.remove("none");
    }
    cn.forEach((element) => element.classList.add("none"));
    lang_btn.textContent = "EN";
  }
});

// lang_btn.addEventListener("click", () => {
//   if (lang_btn.textContent == "EN") {
//     ja.forEach((element) => element.classList.add("none"));
//     en.forEach((element) => element.classList.remove("none"));
//     lang_btn.textContent = "CN";
//   } else if (lang_btn.textContent == "CN") {
//     en.forEach((element) => element.classList.add("none"));
//     cn.forEach((element) => element.classList.remove("none"));
//     lang_btn.textContent = "JA";
//   } else if (lang_btn.textContent == "JA") {
//     cn.forEach((element) => element.classList.add("none"));
//     ja.forEach((element) => element.classList.remove("none"));
//     lang_btn.textContent = "EN";
//   }
// });
