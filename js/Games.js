class Game {
  constructor () {
    this.missed = 0;
    this.phrases = [
      'two peas in a pod',
      'a dime a dozen',
      'back to square one',
      'cut to the chase',
      'down to earth',
      'down to the wire',
      'drawing a blank',
      'elvis has left the building',
      'everything but the kitchen sink',
      'fit as a fiddle',
      'foaming at the mouth',
      'go for broke',
      'head over heels',
      'hold your horses',
      'i smell a rat',
      'making a scene'
     ];
  }

  /**
  * randomly retrieves one phrase from the array
   */

  getRandomPhrases () {
    let random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }

  /**
  * checks if pressed button is in the phrase
   */

  handleInteraction (key,phrase) {
    if (!phrase.checkLetter(key)) {
      this.removeLife();
      console.log(this.missed);
      if (this.missed === 5) {
        this.gameOver('lose');
      }
    } else {
      phrase.showMatchedLetter(key);
      if (this.checkForWin() === 'win'){
        this.gameOver('win');
      }
    }

  }

  /**
  * removes a life/heart from board.  ends game if out of lives
   */

  removeLife () {
    const heartContainer = document.getElementById('scoreboard');
    const heartOl = heartContainer.firstElementChild;
    const heartLi = heartOl.children;
    if (this.missed < 5){
    heartLi[this.missed].style.display = "none";
    this.missed += 1;
  }

  }

  /**
  * checks to see if all letters have been found
   */

  checkForWin () {
    let li = document.getElementsByClassName('letter');
    let showCount = 0;
    for ( let i = 0; i < li.length; i++) {
      //console.log(li[i]);
      if(li[i].classList.contains('show')) {
        showCount += 1;
      }
      if (showCount === li.length) {
        return 'win';
      }
    }

    // if () {
    //
    // }

  }

  /**
  * displays win or lose message
   */

  gameOver(status) {
    const overlay = document.getElementById('overlay');
    const gameOverMessage = document.getElementById('game-over-message');
    const startButton = document.getElementById('btn__reset');
    startButton.style.display = "none";
    if (status === 'win') {
      gameOverMessage.innerText = "You Win!!"
      overlay.style.display = 'flex';

    } else if (status === 'lose') {
      gameOverMessage.innerText = "Sorry, you lose."
      overlay.style.display = 'flex';
    }
  }

  /**
  * calls getRandomPhrases and adds that phrase to the board.
   */

  startGame() {
    let randomPhrase = this.getRandomPhrases();
    console.log(`${randomPhrase} game 79`);
    currPhrase = new Phrase (randomPhrase);
    currPhrase.addPhraseToDisplay(randomPhrase);
  }



}
