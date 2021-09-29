const substitutionModule = (function () {
    function substitution(input, alphabet, encode = true) {
    let newAlpha = [];
  if ((!alphabet) || (alphabet.length < 26)) return false;
   for (let m = 0; m < alphabet.length; m++) {
     if (newAlpha.includes(alphabet[m])) return false;
     else newAlpha.push(alphabet[m]);
   }
       let realAlphabet = 'abcdefghijklmnopqrstuvwxyz';
       let lowerCase = input.toLowerCase().split(' ');
       let alphaObj = {};
       let alphaArray = [];
       let message = [];
       for (let i = 0; i < 26; i++) {
          alphaArray.push(alphaObj = {
               letter: realAlphabet[i],
               subLetter: alphabet[i]
           });
       } 
      lowerCase.forEach((word) => {
          for (let l = 0; l < word.length; l++) {
              for (let j = 0; j < 26; j++) {
                  let aAJ = alphaArray[j];
                  if ((encode) && (word[l] === aAJ.letter)) message.push(aAJ.subLetter);
                  if ((!encode) && (word[l] === aAJ.subLetter)) message.push(aAJ.letter); 
                 } 
           }     message.push(' ');
       });
       return message.join('').trim();
       }
return {
substitution,
};
})();

module.exports = { substitution: substitutionModule.substitution };
