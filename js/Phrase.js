class Phrase {
  constructor (phrase) {
    this.phrase = phrase;
  } //end constructor

/**
* adds placeholders to display for each letter of the phrase
*/

addPhraseToDisplay () {
  console.log(`${this.phrase} 1`);
  let phraseArray = this.phrase.split('');
  const phraseUl = document.getElementsByTagName('ul');


  for (var i = 0; i < phraseArray.length; i++){
    let li = document.createElement('li');
    if (phraseArray[i] !== ' ') {
      li.innerText = phraseArray[i];
      li.className = `hide letter ${phraseArray[i]}`;
      phraseUl[0].appendChild(li);
    } else {
      li.innerText = `${phraseArray[i]} `;
      li.className = `hide space`;
      phraseUl[0].appendChild(li);
    }
  }
}

/**
* checks to see if letter selected is in phrase
* retunrs boolian
*/

checkLetter (key) {
  let phraseArray = this.phrase.split('');
  return phraseArray.find(letter => letter === key.target.innerText);

}

/**
* reveals letter(s) on board that match
*/

showMatchedLetter () {

}

}//end class
