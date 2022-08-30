let btnx = document.querySelector(".btn");
let contactcont = document.querySelector(".contactcont");
let contact = document.querySelector(".contact");
let switch1 = document.querySelector(".switch1");
let switch2 = document.querySelector(".switch2");
let arcade = document.querySelector(".arcade");
let arcade2 = document.querySelector(".arcade2");
let arcade3 = document.querySelector(".arcade3");
let contador = 0;
console.log(contador);
btnx.addEventListener("click", function () {
  contactcont.classList.add("d-none");
});

contact.addEventListener("click", function () {
  contactcont.classList.remove("d-none");
});

switch1.addEventListener("click", function () {
  if (contador === 0) {
    arcade3.classList.add("arcadeAnim");
    arcade2.classList.remove("arcadeAnim2");
    switch2.classList.add("d-none");
    switch1.classList.add("switch2");
    contador++;
  } else {
    arcade3.classList.remove("arcadeAnim");
    arcade2.classList.add("arcadeAnim2");
    switch2.classList.remove("d-none");
    switch1.classList.remove("switch2");
    contador = 0;
  }
});

switch2.addEventListener("click", function () {
  if (contador === 0) {
    arcade3.classList.add("arcadeAnim2");
    arcade.classList.remove("arcadeAnim");
    switch2.classList.add("switch3");
    switch1.classList.add("d-none");
    contador++;
  } else {
    arcade3.classList.remove("arcadeAnim2");
    arcade.classList.add("arcadeAnim");
    switch1.classList.remove("d-none");
    switch2.classList.remove("switch3");
    contador = 0;
  }
});
