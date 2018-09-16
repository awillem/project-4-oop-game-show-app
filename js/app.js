const startButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
let currGame; // new game created when start button clicked
let currPhrase; // random phrase created during startGame()

// hides the overlay
function resetDisplay () {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}


//hides over lay, creates new game, starts game
startButton.addEventListener('click', function () {
  resetDisplay();
  currGame = new Game();
  gamePhrase = currGame.startGame();
});


//when a key is clicked, disables it, adds chosen class, and calls handleInteraction();
function markButton (key) {
  key.target.setAttribute('disabled','true');
  key.target.className = 'key chosen';
  currGame.handleInteraction(key,currPhrase);

}

//Listens for a click on a keyboard letter, calls markButton() on it.
qwerty.addEventListener('click', function (e) {
  if (e.target.className === 'key'){
  markButton(e);
}
});
