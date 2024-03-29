// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function generatePassword() {

  var result = "";

  //number of charactors selector and validation
  var numCharacter = prompt("Number of characters (between 8 and 128)?");

  while (isNaN(numCharacter) || numCharacter > 128 || numCharacter < 8) {
    alert("Please try again. Must choose a number between 8 and 128");
    numCharacter = prompt("Number of characters (between 8 and 128)?");
  }

  //Lowercase selector and validation
  var lowerCase = prompt("Include lowercase characters? (y or n)");

  while (lowerCase !== "y" && lowerCase !== "n") {
    alert("Please try again. Please select either 'y' or 'n'");
    lowerCase = prompt("Include lowercase characters? (y or n)?");
  }


  //lowercase selector and validation
  var upperCase = prompt("Include uppercase characters? (y or n)");

  while (upperCase !== "y" && upperCase !== "n") {
    alert("Please try again. Please select either 'y' or 'n'");
    upperCase = prompt("Include uppercase characters? (y or n)?");
  }

  //special character selector and validation
  var special = prompt("Include special characters? (y or n)");

  while (special !== "y" && special !== "n") {
    alert("Please try again. Please select either 'y' or 'n'");
    special = prompt("Include special characters? (y or n)?");
  }

  //character variables
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "!@#$%^&*()-_=+";

  //create and assign password keybank
  var passwordKeybank = ""

  if (lowerCase === "y") {
    passwordKeybank = passwordKeybank + lowerCaseChars;
  } 
  
  if (upperCase === "y"){
    passwordKeybank = passwordKeybank + upperCaseChars;
  } 
  
  if (special === "y") {
    passwordKeybank = passwordKeybank + specialChars;
  }

  console.log(passwordKeybank);

  //create password from stored parameters
  for (var i = 0; i < numCharacter; i++) {
    result += passwordKeybank.charAt(Math.floor(Math.random() * passwordKeybank.length));
  }

  return result;
  }
  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);