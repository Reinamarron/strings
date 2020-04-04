// Exercise One
// Check to see if the string is empty.  Return true or false.
function isEmptyString(string) {
  // 
  if(string.length)
  console.log(str.length);
  return !Boolean(string);
}
//Tests: Run these commands to make sure you did it right. They should all be true.
console.log(isEmptyString("") === true);
console.log(isEmptyString("Hello!") === false);
console.log(isEmptyString(" ") ===  false);


// Exercise Two
// Check to see if the text contains the phrase "java". Return true or false. Remember that javascript is case sensitive! Your code should be case-insensitive, meaning that it works for "Java", "java", "JAVA", etc...
// Hint: indexOf is case sensitive! So how can you search for any possible case of java? What if you made the entire text string lowercase? Then you searched through that?  Check out the Essential String Functions from the reading and see if there's a useful function there.
function containsWordJava(text) {
  // look for / match a substring in a string javascript
  let result; 
  // Add your code here.
  let combinedString = str1 + str2
  console.log(containsWordJava)
    return "Hello this is a message about JavaScript!;
}
//Tests: Run these commands to make sure you did it right. They should all be true.
console.log(containsWordJava("Hello this is a message about coding.") === false);
console.log(containsWordJava("Hello this is a message about JavaScript!") === true);
console.log(containsWordJava("JAVA IS FUN :D") === true);


// Exercise Three
// Given the text, the goal is to limit the number of characters to maxLength and add an ellipsis "..." to the end.
// Note that the length of the string should be maxLength including the ellipsis.  This means you'll have to subtract the lenght of the ellipsis fom the maxLength to know how many characters there should be.
// Hint: Look at the "slice" method.  You can set the first argument to zero to make it start at the beginning of the string.   (Watch out that slice returns a new string! You need to assign it to something)
function trimSentence(text, maxLength) {
  // trim string js

  // step 1: is text longer than maxLength - 3
  // step 2: if longer cut the string maxLength - 3 and add "..."
  // step 3: else return original text

  // Add your code here.
  return text;
}
//Tests: Run these commands to make sure you did it right. They should all be true.
console.log(trimSentence("The fox jumped over the fence to get to the farm.", 16) === "The fox jumpe...");
console.log(trimSentence("supercalifragilisticexpialidocious", 20) === "supercalifragilis...");
console.log(trimSentence("Short", 16) === "Short");



Complete the exercises by filling in the code inside the functions.

If your code is working correctly, all of tests should output true when run.
