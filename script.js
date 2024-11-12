const textInput = document.getElementById("inputText");
const result = document.getElementById("result");

function isVowel(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function checkVowels() {
  const user_input = textInput.value;
  const vowelCount = isVowel(user_input)
  result.innerHTML = `The number of vowels is: ${vowelCount}`
  reset();
}

function reset(){
    textInput.value = ""
}
