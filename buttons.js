let count = 0;
const countSpan = document.getElementById("count");
const button = document.getElementById("increment-button");

button.addEventListener("click", function() {
  count++;
  countSpan.textContent = count;
});