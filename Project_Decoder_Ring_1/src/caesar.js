const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    const output = input.toLowerCase();
    let letSh = 0;
    const message = [];
    
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    
  for (let i = 0; i < input.length; i++) {
    let letter = output.charCodeAt(i);
    if (letter < 65 || letter > 122) message.push(output[i]);
    else {
    letSh = (encode) ? letter + shift : letter - shift;
    if (letSh > 122) message.push(String.fromCharCode(letSh - 26));
      else if (letSh < 97) message.push(String.fromCharCode(letSh + 26));
      else message.push(String.fromCharCode(letSh));
    }
    }
  return message.join('').trim();
    }
   return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };  