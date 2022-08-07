const palindromes = function (text) {
  text = Array.from(text.toLowerCase()).filter((char) =>
    "abcdefghijklmnopqrstuvwxyz".includes(char)
  );
  let pureText = "",
    reversedText = "";
  for (const char of text) {
    pureText += char;
  }
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return pureText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
