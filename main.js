const lang_btn = document.getElementById("lang_btn");
const ja = document.querySelectorAll(".ja");
const en = document.querySelectorAll(".en");
const cn = document.querySelectorAll(".cn");

lang_btn.addEventListener("click", () => {
  if (lang_btn.textContent == "EN") {
    en.forEach((element) => element.classList.remove("none"));
    ja.forEach((element) => element.classList.add("none"));
    lang_btn.textContent = "CN";
  } else if (lang_btn.textContent == "CN") {
    cn.forEach((element) => element.classList.remove("none"));
    en.forEach((element) => element.classList.add("none"));
    lang_btn.textContent = "JA";
  } else if (lang_btn.textContent == "JA") {
    ja.forEach((element) => element.classList.remove("none"));
    cn.forEach((element) => element.classList.add("none"));
    lang_btn.textContent = "EN";
  }
});
