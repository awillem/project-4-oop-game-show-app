const startButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
let currGame;
let randomPhrase;
function resetDisplay () {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}



startButton.addEventListener('click', function () {
  resetDisplay();
  currGame = new Game();
  currGame.startGame();
});

function markButton (key,randomPhrase) {
console.log(randomPhrase);
  key.target.setAttribute('disabled','true');
  key.target.className = 'key chosen';
  currGame.handleInteraction(key,randomPhrase);
}

qwerty.addEventListener('click', function (e,randomPhrase) {
  markButton(e,randomPhrase);
});
