const largeString = "asdasdasasd";
const smallString = "aps";

const largeStringArray = largeString.split("");
const smallStringArray = smallString.split("");

let largeStringAlphabetCount = [];
let smallStringAlphabetCount = [];

const hashForLargeString = key => {
  if (largeStringAlphabetCount[key] === undefined)
    largeStringAlphabetCount[key] = 1;
  else largeStringAlphabetCount[key] += 1;
};
const hashForSmallString = key => {
  if (smallStringAlphabetCount[key] === undefined)
    smallStringAlphabetCount[key] = 1;
  else smallStringAlphabetCount[key] += 1;
};

largeStringArray.forEach(element => {
  hashForLargeString(element.charCodeAt(0));
});
smallStringArray.forEach(element => {
  hashForSmallString(element.charCodeAt(0));
});

let answer = true;

smallStringArray.forEach(element => {
  if (answer) {
    if (
      smallStringAlphabetCount[element.charCodeAt(0)] <
      largeStringAlphabetCount[element.charCodeAt(0)]
    )
      answer = true;
    else answer = false;
  }
});

console.log(answer);
