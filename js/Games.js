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
    let random = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[random];
  }

  /**
  * checks if pressed button is in the phrase
   */

  handleInteraction (key,phrase) {
    console.log(`${phrase} 3`);
    if (phrase.checkLetter(key)) {
      removeLife();
    } else {
      showMatchedLetter();
      checkforWin();
    }

  }

  /**
  * removes a life/heart from board.  ends game if out of lives
   */

  removeLife () {

  }

  /**
  * checks to see if all letters have been found
   */

  checkForWin () {


  }

  /**
  * displays win or lose message
   */

  gameOver() {

  }

  /**
  * calls getRandomPhrases and adds that phrase to the board.
   */

  startGame() {
    randomPhrase = this.getRandomPhrases();
    const gamePhrase = new Phrase (randomPhrase);
    gamePhrase.addPhraseToDisplay(randomPhrase);
  }



}
