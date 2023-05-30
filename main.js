const popUp = document.querySelector("#popup");
const persona = document.querySelector("#persona");
const button = document.querySelector("#share");

let clickeado = true;

button.addEventListener("click", () => {
  if (clickeado) {
    button.classList.toggle("bg-slate-700");

    popUp.classList.toggle("hidden");
    popUp.classList.add("flex");
    clickeado = true;
  }
});
