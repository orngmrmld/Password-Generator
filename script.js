// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables I wrote
// var includeLow = false;
// var includeUp = false;
// var includeNum = false;
// var includeSpecChar = false;
var passLength = 0;
var charType = '';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const special = '!()-.?[]`;:#$^&*+=';
const integers = '0123456789'

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function that generates a string
function generatePassword(length,charType){
  let word = ' ';

  for (let i = 0; i < length; i++){
    word += characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return word;
}

// Add event listener to generate button
// When the button is clicked a prompt for password criteria shows up
generateBtn.addEventListener("click", writePassword);



// Choices for Password Prompt
// several prompts
// first prompt asks if user wants to select the length (yes or no) (no defaults to passLength 8)
// second prompt asks if user want it to be all upper case (1) all lower case (2) or include both (3)
// third prompt asks if user wants to include numbers (1) special characters (2) or include both (3)
function writePassword(event){
  let choice1 = window.prompt("Enter a Number to generate a password based on length or content type:" + "\n\nEnter (1) to generate based on length" + "\nEnter (2) to generate based on content type" + "\nEnter (3) to generate based on both");
  event.preventDefault();
  if(choice1 === '1'){
    window.alert("You chose to generate based on length");
    lengthCheck();

  }else if(choice1 === '2'){
    window.alert("You chose to generate based on content type");
    typeCheck();
  }else if(choice1 === '3'){

  }else{

  }

}


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
  } else {
    alert("You chose a length of " + passLength + " characters for your password.");
  }

}


// Criteria 2: Character Type
// shows list of character types to choose to use
// needs to validate input and choose at least one character type
function typeCheck(){
  let choice2 = window.prompt("Enter a Number to choose content type: " + "\n\n(1) Case Sensitive" + "\n(2) Inlcudes Numbers" + "\n(3) Includes Special Characters" + "\n(4) SuperSecureIncludes All");

  if(choice2 === '1'){
    alert("You chose to make your password case sensitive")

  } else if(choice2 === '2'){

  } else if(choice2 === '3'){

  } else if(choice2 === '4'){

  }else {

  }




}
