const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function (event) {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
