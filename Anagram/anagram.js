function isAnagram(stringA, stringB) {
  //  first converting into lowercase then splitting then sorting then joining
  const stringASorted = stringA.toLowerCase().split("").sort().join(""); 
  const stringBSorted = stringB.toLowerCase().split("").sort().join(""); 


  
  return stringASorted === stringBSorted;
  
}
var str1 = prompt("Enter first string");
var str2 = prompt("Enter second string");

document.write(isAnagram(str1, str2));


