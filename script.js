// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables I wrote
var includeLow, includeUp, includeSpecChar, includeNum;
var passLength = 0;
var counter = 0;
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const special = '!()-.?[]`;:#$^&*+=';
const integers = '0123456789'

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function that generates a string
// Default password is 8 char in length and does not use special characters
function generatePassword(length){
  let characters = '';
  let word = ' ';

  if(counter <= 0){
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    includeLow,includeUp,includeNum,includeSpecChar = false;
  }
  if(includeLow){
  characters += lower;
  }
  if(includeUp){
  characters += upper;
  }
  if(includeSpecChar){
  characters += special;
  }  
  if(includeNum){
  characters += integers;
  }
  
  

  for (let i = 0; i < length; i++){
    word += characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return word;
}

// Add event listener to generate button
// When the button is clicked a prompt for password criteria shows up
generateBtn.addEventListener("click", writePass);



// Choices for Password Prompt
// several prompts
// first prompt asks if user wants to select the length (yes or no) (no defaults to passLength 8)
// second prompt asks if user want it to be all upper case (1) all lower case (2) or include both (3)
// third prompt asks if user wants to include numbers (1) special characters (2) or include both (3)
function writePass(event){
  let choice1 = window.prompt("Enter a Number to generate a password based on length or content type:" + "\n\nEnter (1) to generate based on length" + "\nEnter (2) to generate based on content type" + "\nEnter (3) to generate based on both");
  event.preventDefault();
  if(choice1 === '1'){
    window.alert("You chose to generate based on length");
    lengthCheck();
    writePassword(passLength);
  }else if(choice1 === '2'){
    window.alert("You chose to generate based on content type");
    typeCheck();
    passLength = 8;
    writePassword(passLength);
  }else if(choice1 === '3'){
    alert("You chose the most secure option! Both!")
    lengthCheck();
    typeCheck();
    writePassword(passLength);
  }else if(choice1 === null){
    return;
  } else {
    alert("Choose a proper option");
    writePass();
  }

}


// Criteria 1: Length
// let useser choose legnth of password between 8 and 128
// when function is called, a prompt appears asking for a number between 8 and 128
// check if the entered number is between 8 and 128 if not try again
// convert input from string to a number
function lengthCheck(){
  passLength = window.prompt("Enter a number between 8 and 128.");
  passLength = parseInt(passLength);

  if (passLength < 8 || passLength > 128){
    window.alert("Pick a number between 8 and 128 Please!");
    passLength = 0;
    lengthCheck();
    return;
  } else if (isNaN(passLength)){
    window.alert("Pick a number please!");
    passLength = 0;
    return;
  } else {
    alert("You chose a length of " + passLength + " characters for your password.");
  }
    writePassword();
}


// Criteria 2: Character Type
// shows list of character types to choose to use
// needs to validate input and choose at least one character type
function typeCheck(){
  counter = 0;

  alert("You will be prompted to choose which character type to include, you must choose at least one.");
  let choice2 = prompt("Would you like to include lowercase characters?" + "\nYes or No?");
  choice2 = choice2.toLowerCase();
  if(choice2 === "yes"){
    alert("You chose to include lowercase characters in your password.");
    includeLow = true;
    counter++;
  } else if(choice2 === "no"){
    alert("You chose not to include lowercase characters in your password.");
    includeLow = false;
  } else {
    alert("Please choose a proper option.");
    typeCheck();
  }

  let choice3 = prompt("Would you like to include uppercase characters?" + "\nYes or No");
  choice3 = choice3.toLowerCase();
  if(choice3 === "yes"){
    alert("You chose to include uppercase characters in your password.");
    includeUp = true;
    counter++;
  } else if(choice3 === "no"){
    alert("You chose not to include uppercase characters in your password.");
    includeUp = false;
  } else {
    alert("Please choose a proper option.");
    typeCheck();
  }

  let choice4 = prompt("Would you like to include numbers?" + "\nYes or No");
  choice4 = choice4.toLowerCase();
  if(choice4 === "yes"){
    alert("You chose to include numbers in your password.");
    includeNum = true;
    counter++;
  } else if(choice4 === "no"){
    alert("You chose not to include numbers in your password.");
    includeNum = false;
  } else {
    alert("Please choose a proper option.");
    typeCheck();
  }

  let choice5 = prompt("Would you like to include special characters?" + "\nYes or No");
  choice5 = choice5.toLowerCase();
  if(choice5 === "yes"){
    alert("You chose to include special characters in your password.");
    includeSpecChar = true;
    counter++;
  } else if(choice5 === "no"){
    alert("You chose not to include special characters in your password.");
    includeSpecChar = false;
  } else {
    alert("Please choose a proper option.");
    typeCheck();
  }
  
  if(counter < 1){
    alert("You did not choose to include any characters, please try again!");
    typeCheck();
  }

}

