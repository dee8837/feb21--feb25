function validatePalin(str) {
  let newStr = "";
  for (let i = str.length-1; i >= 0; i--) {
    newStr = newStr + str.charAt(i) + "";
  }
  if (str === newStr) {
    return "It is a palindrome";
  } else {
    return "It is not a palindrome";
  }
}

const string = prompt("Enter a string or number: ");

const value = validatePalin(string);
document.write(value); // tat
