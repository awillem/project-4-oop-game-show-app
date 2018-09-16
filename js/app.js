const startButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
let currGame;
let currPhrase;


function resetDisplay () {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}



startButton.addEventListener('click', function () {
  resetDisplay();
  currGame = new Game();
  gamePhrase = currGame.startGame();
});

function markButton (key) {
  //  console.log(currPhrase);
  key.target.setAttribute('disabled','true');
  key.target.className = 'key chosen';
  currGame.handleInteraction(key,currPhrase);

}

qwerty.addEventListener('click', function (e) {
  markButton(e);
});
