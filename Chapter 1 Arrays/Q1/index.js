let dublicates = [];
let array = [];

const hashMap = key => {
  if (array[key] === undefined) array[key] = key;
  else dublicates.push(String.fromCharCode(key));
};

const checkString = "asdwqudhaskncaqwoiahds";
const arrayOfCheckString = checkString.split("");

arrayOfString.forEach(element => {
  hashMap(element.charCodeAt(0));
});
// if dublicates array is null then all the values of array are unique
console.log(dublicates);
