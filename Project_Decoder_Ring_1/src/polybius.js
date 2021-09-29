const polybiusModule = (function () {
    function polybius(input, encode = true) {
       const lowerCase = input.toLowerCase().split('');
       const numArray = input.split(' ');
       let message = [];
       const square = [
           ['a' ,'f', 'l', 'q', 'v'], 
           ['b', 'g', 'm', 'r', 'w'], 
           ['c', 'h', 'n', 's', 'x'], 
           ['d', 'i', 'o', 't', 'y'], 
           ['e', 'k', 'p', 'u', 'z']
       ];
       if (encode) {
                 lowerCase.forEach((letter) => {
                   if (letter === " ") message.push(letter);
                   else if (letter === 'j') message.push("42");
                   else {
                       for (let i = 0; i < 5; i++) {
                         for (let j = 0; j < 5; j++) {
                           if (square[i][j] === letter) message.push(`${i + 1}${j + 1}`);           
                           }
                       }
                     }
                   });
               } else {
                   for (i = 0; i < numArray.length; i ++) {
                       let numPairs = numArray[i];
                       if (numPairs.length % 2 !== 0) return false;
                       
                       for (j= 0; j < numPairs.length; j += 2) {
                           let down = (Number(numPairs[j]) - 1);
                           let across = (Number(numPairs[j + 1]) - 1);
                           let sda = square[down][across];
                           (sda === 'i' || sda === 'j' ) 
                           ? message.push('i/j') 
                           : message.push(sda);
                   }
                   message.push(' ');
               }
           }
      return message.join('').trim();
     }
   
     return {
       polybius,
     };
   })();
   
   module.exports = { polybius: polybiusModule.polybius };   