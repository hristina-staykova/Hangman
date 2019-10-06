var wins = 0;
        var compList = ["game", "brother", "father", "mother", "sofa", "chair", "food", "yellow", "green", "skateboard", "bicycle", "school", "eight", "eleven", "twelve","fifteen", "thirteen", "family", "friend", "food"];

        function newGame() {
        var compChoice = compList[Math.floor(Math.random() * compList.length)];
        console.log(compChoice);
        var hiddenWord = Array(compChoice.length);
        for (i = 0; i < hiddenWord.length; i++) {
            hiddenWord[i] = "_";
        }
        console.log(hiddenWord);
        var displayWord = hiddenWord.join(" ");
        var guessList = [];
        left = 13;
        document.getElementById("left").innerHTML = left;
        document.getElementById("user-list").innerHTML = guessList;
        document.getElementById("win").innerHTML = wins;
        setTimeout(function () {
            document.getElementById("hidden").innerHTML = displayWord;
        }, 2000);

        var compChoiceArray = compChoice.split('');

        document.onkeyup = function (event) {
            var userInput = event.key.toLowerCase();
            for (i = 0; i < compChoiceArray.length; i++) {
                if (userInput === compChoiceArray[i]) {
                    hiddenWord[i] = userInput;
                    console.log(hiddenWord);
                    displayWord = hiddenWord.join(" ");
                    document.getElementById("hidden").innerHTML = displayWord;
                }
            }

            if (!hiddenWord.includes("_")) {
                wins++;
                document.getElementById("win").innerHTML = wins;
                newGame();
            }

            if (!compChoice.includes(userInput) && !guessList.includes(userInput)) {
                guessList.push(userInput);
                left = left - 1;
                console.log(left);
                document.getElementById("user-list").innerHTML = guessList;
                document.getElementById("left").innerHTML = left;
                if (left === 0){
                    document.getElementById("hidden").innerHTML = compChoice;
                    setTimeout(function () {
                        newGame();
                    }, 2000);
                }
            }
        }
    }