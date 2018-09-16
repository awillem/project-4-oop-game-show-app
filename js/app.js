const startButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
// const keyChart = {
//   97 : 'a',  98 : 'b',  99 : 'c',
//   100 : 'd',  101 : 'e',  102 : 'f',
//   103 : 'g',  104 : 'h',  105 : 'i',
//   106 : 'j',  107 : 'k',  108 : 'l',
//   109 : 'm',  110 : 'n',  111 : 'o',
//   112 : 'p',  113 : 'q',  114 : 'r',
//   115 : 's',  116 : 't',  117 : 'u',
//   118 : 'v',  119 : 'w',  120 : 'x',
//   121 : 'y',  122 : 'z'
// };

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

function markButton2 (key) {
  key.target.setAttribute('disabled','true');
  key.target.className = 'key chosen';
  currGame.handleInteraction(key,currPhrase);

}

//Listens for a click on a keyboard letter, calls markButton() on it.
qwerty.addEventListener('click', function (e) {
  console.log(e.target.innerText);
  if (e.target.className === 'key'){
  markButton2(e);
}
});

// document.addEventListener('keypress', function (e) {
//   console.log(e.which);
//   const pressedLetter = keyChart[e.which];
//   console.log(pressedLetter);
//   markButton(e);
// });
