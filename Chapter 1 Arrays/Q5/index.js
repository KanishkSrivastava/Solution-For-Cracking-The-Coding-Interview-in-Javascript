const originalString = "pale";
const editedString = "bake";

const originalStringArray = originalString.split("");
const editedStringArray = editedString.split("");

let errorCounter = 0;

if (Math.abs(originalStringArray.length - editedStringArray.length) > 1) {
  errorCounter = 2;
}
if (originalStringArray.length === editedStringArray.length) {
  editedStringArray.forEach((element, index) => {
    if (element != originalStringArray[index]) errorCounter += 1;
  });
}

let iterate = 0;
let bool = true;

if (originalStringArray.length === editedStringArray.length + 1) {
  for (iterate; iterate < editedStringArray.length; iterate++) {
    if (bool) {
      if (editedString[iterate] != originalString[iterate]) {
        errorCounter += 1;
        if (editedString[iterate] === originalString[iterate + 1]) {
          bool = false;
        }
        if (editedString[iterate] != originalString[iterate + 1]) {
          errorCounter += 1;
          break;
        }
      }
    }
    if (!bool) {
      if (editedString[iterate] != originalString[iterate + 1]) {
        errorCounter += 1;
      }
    }
  }
}

let iterate1 = 0;
let bool1 = true;

if (originalStringArray.length + 1 === editedStringArray.length) {
  for (iterate1; iterate1 < originalString.length; iterate1++) {
    if (bool1) {
      if (originalString[iterate1] != editedString[iterate1]) {
        errorCounter += 1;
        if (originalString[iterate1] === editedString[iterate1 + 1]) {
          bool1 = false;
        }
        if (editedString[iterate1] != originalString[iterate1 + 1]) {
          errorCounter += 1;
          break;
        }
      }
    }
    if (!bool1) {
      if (originalString[iterate1] != editedString[iterate1 + 1]) {
        errorCounter += 1;
      }
    }
  }
}

// If error counter is greater than 1 than result will be false
console.log(errorCounter);
