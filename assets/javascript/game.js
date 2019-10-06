var wins = 0;
var compList = ["queen", "nirvana", "muse", "metallica", "coldplay"];

function newGame() {
  var compChoice = compList[Math.floor(Math.random() * compList.length)];
  var hiddenWord = Array(compChoice.length);
  for (i = 0; i < hiddenWord.length; i++) {
    hiddenWord[i] = "_";
  }
  var displayWord = hiddenWord.join(" ");
  var guessList = [];
  left = 13;
  document.getElementById("left").innerHTML = left;
  document.getElementById("user-list").innerHTML = guessList;
  document.getElementById("win").innerHTML = wins;
  document.getElementById("hidden").innerHTML = displayWord;

  var compChoiceArray = compChoice.split("");

  document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    for (i = 0; i < compChoiceArray.length; i++) {
      if (userInput === compChoiceArray[i]) {
        hiddenWord[i] = userInput;
        displayWord = hiddenWord.join(" ");
        document.getElementById("hidden").innerHTML = displayWord;
      }
    }

    if (!hiddenWord.includes("_")) {
      wins++;
      document.getElementById("win").innerHTML = wins;
      document.getElementById("hidden").innerHTML = compChoice;
        setTimeout(function() {
          newGame();
        }, 2000);
    }

    if (!compChoice.includes(userInput) && !guessList.includes(userInput)) {
      guessList.push(userInput);
      left = left - 1;
      document.getElementById("user-list").innerHTML = guessList;
      document.getElementById("left").innerHTML = left;
      if (left === 0) {
        document.getElementById("hidden").innerHTML = compChoice;
        setTimeout(function() {
          newGame();
        }, 2000);
      }
    }
  };
}
