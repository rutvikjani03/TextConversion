var speech = new SpeechSynthesisUtterance();

document.getElementById("submit").addEventListener("click", function () {
  speech.text = document.getElementById("text").value;

  window.speechSynthesis.speak(speech);
});

document.getElementById("change").addEventListener("click", function (text) {
  var text = document.getElementById("text").value;
  let change = text.toUpperCase();
  document.getElementById("text").value = change;
});

document.getElementById("reset").addEventListener("click", function (text) {
  var text = document.getElementById("text").value;
  let reset = text.toLowerCase();
  document.getElementById("text").value = reset;
});
