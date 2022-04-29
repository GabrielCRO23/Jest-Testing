function caesarCipher(string) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    let cipheredText = "";
    for (let i = 0; i < string.length; i++) {
      const index = alphabets.indexOf(string[i].toLowerCase());
      if (index === -1) {
        cipheredText += string[i];
        continue;
      }
      const newIndex = (index + 1) % 26;
      const newLetter = alphabets[newIndex];
      cipheredText +=
        string[i] === string[i].toUpperCase() ? newLetter.toUpperCase() : newLetter;
    }
    return cipheredText;
  }


module.exports = caesarCipher;