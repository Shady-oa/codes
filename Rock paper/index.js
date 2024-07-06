let computerMOve = "";
let playerMove = "";
function game() {
  let computerPick = Math.random();
  if (computerPick <= 1 / 3) {
    computerMOve = "Rock";
  } else if (computerPick > 1 / 3 && computerPick <= 2 / 3) {
    computerMOve = "Paper";
  } else if (computerPick > 2 / 3 && computerPick <= 1) {
    computerMOve = "Scissors";
  }

  console.log(computerMOve);
}

const scores = JSON.parse(localStorage.getItem("score")) || {
  tie: 0,
  win: 0,
  loose: 0,
};

let tieScore = document.getElementById("tie");
let winScore = document.getElementById("win");
let looseScore = document.getElementById("loose");

tieScore.textContent = `Ties: ${scores.tie}`;
winScore.textContent = `Wins: ${scores.win}`;
looseScore.textContent = `Loose: ${scores.loose}`;

function comparePick() {
  game();
  if (
    (computerMOve === "Rock" && playerMove === "Rock") ||
    (computerMOve === "Scissors" && playerMove === "Scissors") ||
    (computerMOve === "Paper" && playerMove === "Paper")
  ) {
    results.textContent = `Outcome- TIE:computer picked ${computerMOve},you picked ${playerMove}`;
    scores.tie += 1;
    tieScore.textContent = `Ties: ${scores.tie}`;
  } else if (
    (computerMOve === "Rock" && playerMove === "Paper") ||
    (computerMOve === "Scissors" && playerMove === "Rock") ||
    (computerMOve === "Paper" && playerMove === "Scissors")
  ) {
    results.textContent = `Outcome- YOU WIN:computer picked ${computerMOve},you picked ${playerMove}`;
    scores.win += 1;
    winScore.textContent = `Wins: ${scores.win}`;
  } else if (
    (computerMOve === "Rock" && playerMove === "Scissors") ||
    (computerMOve === "Paper" && playerMove === "Rock") ||
    (computerMOve === "Scissors" && playerMove === "Paper")
  ) {
    results.textContent = `Outcome- YOU LOOSE:computer picked ${computerMOve},you picked ${playerMove}`;
    scores.loose += 1;
    looseScore.textContent = `Loose: ${scores.loose}`;
  }
  console.log(scores);
  localStorage.setItem("score", JSON.stringify(scores));
}

let rock = document.getElementById("rock");
rock.addEventListener("click", function () {
  playerMove = "Rock";
  comparePick();
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function () {
  playerMove = "Paper";
  comparePick();
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function () {
  playerMove = "Scissors";
  comparePick();
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  results.textContent = "Scores reset";
  scores.tie = 0;
  scores.loose = 0;
  scores.win = 0;

  winScore.textContent = `Wins: ${scores.win}`;
  looseScore.textContent = `Loose: ${scores.tie}`;
  tieScore.textContent = `Ties: ${scores.loose}`;
  localStorage.removeItem("score");
});
