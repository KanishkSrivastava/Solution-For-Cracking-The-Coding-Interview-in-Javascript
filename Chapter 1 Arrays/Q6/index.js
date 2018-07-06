const string = "aabbcaaaaaabcccc";
let encodedString = "";
const stringAlphabetCount = [];

const stringArray = string.split("");

const hashForString = (element, currentIndex) => {
  if (currentIndex === 0) {
    stringAlphabetCount.push(element);
    return;
  }
  if (
    typeof stringAlphabetCount[stringAlphabetCount.length - 1] === "string" &&
    stringAlphabetCount[stringAlphabetCount.length - 1] === element
  ) {
    stringAlphabetCount.push(2);
    return;
  }
  if (
    typeof stringAlphabetCount[stringAlphabetCount.length - 1] === "string" &&
    stringAlphabetCount[stringAlphabetCount.length - 1] != element
  ) {
    stringAlphabetCount.push(element);
    return;
  }
  if (
    typeof stringAlphabetCount[stringAlphabetCount.length - 1] === "number" &&
    stringAlphabetCount[stringAlphabetCount.length - 2] === element
  ) {
    let occurence = stringAlphabetCount.pop();
    occurence += 1;
    stringAlphabetCount.push(occurence);
    return;
  }
  if (
    typeof stringAlphabetCount[stringAlphabetCount.length - 1] === "number" &&
    stringAlphabetCount[stringAlphabetCount.length - 2] != element
  ) {
    stringAlphabetCount.push(element);
    stringAlphabetCount.push(1);
    return;
  }
};

stringArray.forEach((element, index) => {
  hashForString(element, index);
});

encodedString = stringAlphabetCount
  .toLocaleString()
  .replace(new RegExp(",", "g"), "");

if (encodedString.length < string.length) {
  console.log(encodedString);
} else console.log(string);
