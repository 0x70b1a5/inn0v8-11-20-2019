// an array of strings
let words = ['aardvark', 'bumblebee', 'cow', 'dolphin', 'elephant', 'fawn', 'gorilla', 'horse', 'ibex', 'jaguar', 'kingfisher', 'lemur', 'manatee', 'nematode', 'oarfish', 'pangolin', 'quail', 'reindeer', 'serval', 'tarsier', 'unicorn', 'vulture', 'wallaby', 'xenarthra', 'zorro'];

let word = words[Math.floor(Math.random()*words.length)];

// another array of strings, but each string is several strings concatenated together
let stages = [
  "+--+\n" +
  "|\n" +
  "|\n" +
  "|\n" +
  "|\n" +
  "+------\n",
  
  "+--+\n" +
  "|  |\n" +
  "|  \\\n" + // Note the use of double-backslash. (And also "\n".)
  "|\n" +     // Without this, the " would be taken literally,
  "|\n" +     // and the string would spill over to the start of the next line
  "+------\n",// This is because backslash ("\") is an "escape character".
  
  "+--+\n" +
  "|  |\n" +
  "|  \\o\n" +
  "|\n" +
  "|\n" +
  "+------\n",
  
  "+--+\n" +
  "|  |\n" +
  "|  \\o\n" +
  "|   |\n" +
  "|\n" +
  "+------\n",
  
  "+--+\n" +
  "|  |\n" +
  "|  \\o\n" +
  "|  /|\n" +
  "|\n" +
  "+------\n",
  
  "+--+\n" +
  "|  |\n" +
  "|  \\o\n" +
  "|  /|\\\n" +
  "|\n" +
  "+------\n",
  
  "+--+\n" +
  "|  |\n" +
  "|  \\o\n" +
  "|  /|\\\n" +
  "|  / \n" +
  "+------\n",
  
  "+--+\n" +
  "|  |\n" +
  "|  \\o\n" +
  "|  /|\\\n" +
  "|  / \\\n" +
  "+------\n"
]

let rightLetters = []; // these will both be arrays of one-letter strings
let wrongLetters = [];

let concealedWord = function(){
  let rtn = "";
  for(let index=0; index<word.length; index++){ // for each letter in the secret word,
    let letter = word[index];
    if(rightLetters.indexOf(letter) >= 0){ // if it has already been guessed,
      rtn += letter + " "; // then show it
    } else {
      rtn += "_ "; // otherwise, just show "_"
    }
  }
  return rtn;
}

let createOutputText = function(){
  let outputText = "";
  outputText += 'Guess the word I am thinking of!\n\n';
  outputText += stages[wrongLetters.length] + "\n";
  outputText += concealedWord() + "\n\n";
  outputText += wrongLetters + "\n\n";
  return outputText;
}

console.log(word);

$output.text(createOutputText());

$submit.click(function() {
  let letter = $input.val();
  $input.val("");
  console.log('guessed letter: "' + letter + '"');
  
  let outputText = "";
  
  if(word.indexOf(letter) >= 0){ // if the guess was right
    rightLetters.push(letter);
    outputText = createOutputText();
    let allLettersGuessed = true; // first, check to see if the game is won
    for(let index=0; index<word.length; index++){
      let wordLetter = word[index];
      if(rightLetters.indexOf(wordLetter) < 0){
        allLettersGuessed = false;
      }
    }
    if(allLettersGuessed){ // show the victory text
      outputText += 'You guessed the word! "' + word + '"!'
    } else { // otherwise, just move the game along
    }
  } else { // if the guess was wrong
    wrongLetters.push(letter);
    outputText = createOutputText();
    let outOfGuesses = wrongLetters.length >= stages.length - 1; // if the man is fully hanged
    if(outOfGuesses){ // then show the losing text
      outputText += 'You should have guessed "' + word + '"!';
    } else { // otherwise, just move the game along
     }
  }
  $output.text(outputText);
});
