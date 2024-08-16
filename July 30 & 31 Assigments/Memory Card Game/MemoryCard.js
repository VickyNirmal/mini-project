document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".Grid-item");
    const movesElement = document.querySelector(".Move-row td:nth-child(2)");
    const pointsElement = document.querySelector(".Point-row td:nth-child(2)");
    const resetButton = document.querySelector(".Reset-btn");
    const exitButton = document.querySelector(".Exit-btn");
  
    let cardValues = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍋", "🍊", "🍓"];
    cardValues = [...cardValues, ...cardValues];

    let flippedCards = [];
    let matchedCards = [];
    let moves = 0;
    let points = 0;

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function initializeGame() {
      shuffle(cardValues);
      cards.forEach((card, index) => {
        card.dataset.value = cardValues[index];
        card.textContent = "?"; 
        card.addEventListener("click", flipCard);
      });
      moves = 0;
      points = 0;
      updateScoreboard();
    }
  
    function flipCard() {
      if (flippedCards.length === 2) return;
      if (this.classList.contains("flipped") || matchedCards.includes(this)) return;
  
      this.textContent = this.dataset.value;
      this.classList.add("flipped");
      flippedCards.push(this);
  
      if (flippedCards.length === 2) {
        moves++;
        updateScoreboard();
        checkForMatch();
      }
    }
  
    function checkForMatch() {
      const [card1, card2] = flippedCards;
      if (card1.dataset.value === card2.dataset.value) {
        points++;
        matchedCards.push(card1, card2);
        flippedCards = [];
        updateScoreboard();
        checkForWin();
      } else {
        setTimeout(() => {
          card1.textContent = "?";
          card2.textContent = "?";
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
          flippedCards = [];
        }, 1000);
      }
    }
  
    function updateScoreboard() {
      movesElement.textContent = moves;
      pointsElement.textContent = points;
    }
  
    function checkForWin() {
      if (matchedCards.length === cards.length) {
        setTimeout(() => {
          alert(`You win! You completed the game in ${moves} moves.`);
          resetGame();
        }, 500);
      }
    }
  
    function resetGame() {
      flippedCards = [];
      matchedCards = [];
      cards.forEach((card) => {
        card.classList.remove("flipped");
        card.textContent = "?";
      });
      initializeGame();
    }
  
    resetButton.addEventListener("click", resetGame);
    exitButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to exit the game?")) {
        window.close();
      }
    });
  
    initializeGame();
  });
  