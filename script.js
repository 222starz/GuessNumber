let guessLeft = 5;
const guesses = document.querySelector("#guessLeft");
guesses.textContent = guessLeft;
let eventContainer = document.querySelector(".eventContainer");

const button = document.querySelector("button");
// generate random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

function resetGame() {
  // reset guesses left
  guessLeft = 5;
  guesses.textContent = guessLeft;
  // reset event container to be empty
  eventContainer.innerHTML = "";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function onButtonClick() {
  // get input value
  const input = document.getElementById("Number").value;
  // set input value to be empty
  document.getElementById("Number").value = "";
  console.log(input);
  // if input value is equal to random number, display "You win"
  if (input == randomNumber) {
    eventContainer.innerHTML = "Correct!";
    resetGame();
  } else if (input < randomNumber) {
    // if input value is less than random number, display "Too low"
    eventContainer.innerHTML = "Too low!";
    guessLeft = guessLeft - 1;
    guesses.textContent = guessLeft;
  }
  // if input value is greater than random number, display "Too high"
  if (input > randomNumber) {
    eventContainer.innerHTML = "Too high!";
    guessLeft = guessLeft - 1;
    guesses.textContent = guessLeft;
  }
  if (guessLeft == 0) {
    resetGame();
  }
}

// add event listener to but
button.addEventListener("click", onButtonClick);
