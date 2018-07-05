const string = "jjaakklliij";
const stringArray = string.split("");

let stringAlphabetCount = [];

let oddOccurenceCounter = 0; // Their should be none or only one alphabet which has odd occurence in the string.

const hashForString = key => {
  if (stringAlphabetCount[key] === undefined) stringAlphabetCount[key] = 1;
  else stringAlphabetCount[key] += 1;
};

stringArray.forEach(element => {
  hashForString(element.charCodeAt(0));
});

stringAlphabetCount.forEach((element, index) => {
  if (
    stringAlphabetCount[index] != undefined &&
    stringAlphabetCount[index] % 2 != 0
  ) {
    oddOccurenceCounter += 1;
  }
});

// If odd occurence counter = 1, then return true otherwise false
console.log(oddOccurenceCounter);
