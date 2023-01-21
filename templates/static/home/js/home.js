const englishButton = document.getElementById("english-button");
const spanishButton = document.getElementById("spanish-button");
const content = document.getElementById("content");

englishButton.addEventListener("click", () => {
  content.innerHTML = "Hello, World!";
});

spanishButton.addEventListener("click", () => {
  content.innerHTML = "Hola, Mundo!";
});
