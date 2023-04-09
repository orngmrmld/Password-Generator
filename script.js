// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables I wrote
var includeLow = false;
var includeUp = false;
var includeNum = false;
var includeSpecChar = false;
var passLength = 0;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const specialChar = '!()-.?[]`;:#$^&*+='

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function that generates a string
function generateWord(length){
  let word = ' ';

  for (let i = 0; i < length; i++){
    word += characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return word;
}

// Add event listener to generate button
// When the button is clicked a prompt for password criteria shows up
generateBtn.addEventListener("click", writePassword);



// Prompt shows two criteria: length and character type

// Criteria 1: Length
// let useser choose legnth of password between 8 and 128
// when function is called, a prompt appears asking for a number between 8 and 128
// check if the entered number is between 8 and 128 if not try again
// convert input from string to a number
function lengthCheck(){
  passLength = window.prompt("Enter a number between 8 and 128");
  passLength = parseInt(passLength);
  if (passLength < 8 || passLength > 128){
    window.alert("Pick a number between 8 and 128 Please!");
    passLength = 0;
    return;
  } else if (isNaN(passLength)){
    window.alert("Pick a number please!");
    passLength = 0;
    return;
  }

}


// Criteria 2: Character Type
// shows list of character types to choose to use
// needs to validate input and choose at least one character type

