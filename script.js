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
  console.log (length);

  var comfirmSpecial = confirm("Do you want to include a special character")
  console.log (comfirmSpecial)

  var confirmNum = confirm("Do you want to include a numeric character?")
  console.log (confirmNum);

  var confirmLower = confirm("Do you want to include a lowercase character?")
  console.log (confirmLower);

  var confirmUpper = confirm("Do you want to include an uppercase character?")
  console.log (confirmUpper);
  
  var symbol = '!@#$%^&*()'
  var number = '0123456789'
  var lowerChar = 'abcdefghijklmnopqrstuvwxyz'
  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  var characters = [symbol, number, lowerChar, upperChar]
  console.log (characters)
  
  for (var i = 0; i < length; i++){
    pwd = characters.charAt(Math.floor(Math.random() * characters.length))}
  


   return "--pwd--"
  //needs to display new variable defined by generate password function

}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
