const X = "X";
const O = "O";
const boxes = document.querySelectorAll(".grid-box");
const statusTxt = document.getElementById("turn-statement");
const restart = document.getElementById("Reset-btn");
const exit = document.getElementById("Exitbtn");
const win = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];
let store = ["", "", "", "", "", "", "", "", ""];
let currentplayer = X;
let player = "X";
let run = false;
init();

function init() {
  boxes.forEach((box) => box.addEventListener("click", boxClick));
  restart.addEventListener("click", restartGame);
  statusTxt.children[1].children[0].innerHTML = currentplayer;
  statusTxt.children[1].children[1].innerHTML = "'s";
  statusTxt.children[2].innerHTML = "turn!";
  run = true;
}

function boxClick() {
  const index = this.dataset.index;
  if (store[index] != "" || !run) {
    return;
  } else {
    updateBox(this, index);
    checkWinner();
  }
}

function updateBox(box, index) {
  store[index] = player;
  box.innerHTML = currentplayer;
  if (currentplayer == "X") {
    box.style.backgroundColor = "rgb(15, 226, 15)";
  } else {
    box.style.backgroundColor = "rgb(30, 94, 255)";
  }
}

function checkWinner() {
  let isWon = false;
  for (let i = 0; i < win.length; i++) {
    const condition = win[i];
    const box1 = store[condition[0]];
    const box2 = store[condition[1]];
    const box3 = store[condition[2]];
    if (box1 == "" || box2 == "" || box3 == "") {
      continue;
    }
    {
      if (box1 == box2 && box2 == box3) {
        isWon = true;
      }
    }
  }
  if (isWon) {
    statusTxt.children[1].children[0].innerHTML = player;
    statusTxt.children[1].children[1].innerHTML = "";
    statusTxt.children[2].innerHTML = "won!";
    run = false;
  } else if (!store.includes("")) {
    statusTxt.children[0].innerHTML = "Game";
    statusTxt.children[1].children[0].innerHTML = "";
    statusTxt.children[1].children[1].innerHTML = "";
    statusTxt.children[2].innerHTML = "Draw!";
    run = false;
  } else {
    changePlayer();
  }
}

function changePlayer() {
  player = player == X ? O : X;
  currentplayer=(currentplayer == X) ? O : X;
  statusTxt.children[0].innerHTML = "Player";
  statusTxt.children[1].children[0].innerHTML = player;
  if(player == X)
  {
    statusTxt.children[1].children[0].style.color="rgb(15, 226, 15)";
  }
  else{
    statusTxt.children[1].children[0].style.color="rgb(30, 94, 255)";
  }
  statusTxt.children[1].children[1].innerHTML = "'s";
  statusTxt.children[2].innerHTML = "turn!";
}

function restartGame(){
    store = ["", "", "", "", "", "", "", "", ""];  
    currentplayer = X; 
    player = "X"; 
    run = true;
    statusTxt.children[0].innerHTML = "Player";
    statusTxt.children[1].children[0].innerHTML = currentplayer;
    statusTxt.children[1].children[0].style.color="rgb(15, 226, 15)";
    statusTxt.children[1].children[1].innerHTML = "'s";
    statusTxt.children[2].innerHTML = "turn!";
    boxes.forEach((box) =>{
        box.innerHTML="";
        box.style.backgroundColor="rgb(255, 255, 92)";
    })
}

exit.addEventListener("click", () => {
  if (confirm("Are you sure you want to exit the game?")) {
    window.close(); 
  }
});