// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function generatePassword(){

  var length = prompt("How long do you want your password to be? (Between 8-20 characters")
  console.log (length)

  var specChar = confirm("Do you want to include a special character")
  console.log (specChar)

  var numChar = confirm("Do you want to include a numeric character?")
  console.log (numChar)

  var lowerCase = confirm("Do you want to include a lowercase character?")
  console.log (lowerCase)

  var upperCase = confirm("Do you want to include an uppercase character?")
  console.log (upperCase)





  return "--password--"
  //needs to display new variable defined by generate password function


}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
