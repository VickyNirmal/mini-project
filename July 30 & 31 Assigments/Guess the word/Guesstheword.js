document.addEventListener("DOMContentLoaded", () => {
    const wordToGuess = "JACKET"; // The word the player needs to guess
    const maxGuesses = 5;
    let remainingGuesses = maxGuesses;
    let guessedWord = Array(wordToGuess.length).fill(""); // Create an array of empty strings
  
    const gridItems = document.querySelectorAll(".Grid-item");
    const conditionElement = document.querySelector(".Condition");
    const textbox = document.querySelector(".Textbox");
    const guessButton = document.querySelector(".Guess-btn");
    const resetButton = document.querySelector(".Reset-btn");
    const exitButton = document.querySelector(".Exit-btn");
  
    // Function to update the displayed guessed word
    function updateGrid() {
      gridItems.forEach((item, index) => {
        item.textContent = guessedWord[index] || ""; // Display the guessed letter or keep it blank
      });
    }
  
    // Function to check the player's guess
    function checkGuess() {
      const guessedLetter = textbox.value.toUpperCase();
      textbox.value = ""; 
  
      if (guessedLetter.length !== 1 || !/^[A-Z]$/.test(guessedLetter)) {
        alert("Please enter a valid single letter.");
        return;
      }
  
      let correctGuess = false;
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === guessedLetter && guessedWord[i] === "") {
          guessedWord[i] = guessedLetter;
          correctGuess = true;
        }
      }
  
      if (!correctGuess) {
        remainingGuesses--;
      }
  
      updateGrid();
      updateCondition();
  
      if (guessedWord.join("") === wordToGuess) {
        setTimeout(() => {
          alert("Congratulations! You've guessed the word!");
          resetGame();
        }, 200);
      } else if (remainingGuesses === 0) {
        setTimeout(() => {
          alert("Game Over! You've run out of guesses.");
          resetGame();
        }, 200);
      }
    }
  
    // Function to update the condition text
    function updateCondition() {
      conditionElement.textContent = `You have ${remainingGuesses} guesses remaining.`;
    }
  
    // Function to reset the game
    function resetGame() {
      remainingGuesses = maxGuesses;
      guessedWord = Array(wordToGuess.length).fill("");
      updateGrid();
      updateCondition();
    }
  
    // Event listeners
    guessButton.addEventListener("click", checkGuess);
    textbox.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        checkGuess();
      }
    });
    resetButton.addEventListener("click", resetGame);
    exitButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to exit the game?")) {
        window.close(); 
      }
    });
  
    // Initialize the game
    resetGame();
  });
  