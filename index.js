let counter = 0;
let corrects = 0;

let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.querySelector("p");

let sovollar = ["2 + 2 = ?", " 2 * 2 = ?", "4 * 4 = ? ", "3 + 3 = ?"];
let jovoblar = ["4", "4", "16", "6"];

h1.textContent = sovollar[counter];

button.addEventListener("click", function (event) {
  event.preventDefault();  
  
  if (input.value === jovoblar[counter]) {
    corrects = corrects + 1;
  }

  counter = counter + 1;

  h1.textContent = sovollar[counter];

  if (counter === sovollar.length) {
    p.textContent = `siz ${corrects} te savolga jovob berdingizx`;
  }

  input.value = "";
});
