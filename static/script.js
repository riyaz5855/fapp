const greeting = document.getElementById("greeting");
const changeTextButton = document.getElementById("change-text");

changeTextButton.addEventListener("click", function () {
  greeting.innerHTML = "Goodbye, World!";
});
