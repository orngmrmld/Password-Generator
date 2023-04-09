// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// When the button is clicked a prompt for password criteria shows up
generateBtn.addEventListener("click", writePassword);



// Prompt shows two criteria: length and character type







// Criteria 1: Length
// let useser choose legnth of password between 8 and 128


// Criteria 2: Character Type
// shows list of character types to choose to use
// needs to validate input and choose at least one character type

