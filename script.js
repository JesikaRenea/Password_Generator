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
  var characters =[]

  var symbol = '!@#$%^&*()'
  console.log(symbol)

  var number = '0123456789'
  console.log(number)

  var lowerChar = 'abcdefghijklmnopqrstuvwxyz'
  console.log(lowerChar)

  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  console.log(upperChar)

  var length = prompt("How long do you want your password to be? (Between 8-20 characters")
  console.log (length);

  if (length === null || length === '' || length < 8 || length > 20){
    alert("Password must be between 8 and 20 characters");
    return;
  }

  var confirmSymbol = confirm("Do you want to include a symbol character")
  console.log (confirmSymbol)
    if(confirmSymbol)characters.push(symbol)

  var confirmNum = confirm("Do you want to include a numeric character?")
  console.log (confirmNum);
    if(confirmNum)characters.push(number)

  var confirmLower = confirm("Do you want to include a lowercase character?")
  console.log (confirmLower);
    if(confirmLower)characters.push(lowerChar)

  var confirmUpper = confirm("Do you want to include an uppercase character?")
  console.log (confirmUpper);
    if(confirmUpper)characters.push(upperChar)

console.log(characters)

  if (!confirmSymbol && !confirmNum && !confirmLower && !confirmUpper){
    alert("Password must contain at least 1 special character");
    return;
  }
  var possibleCharactersString = characters.join('');
    console.log(possibleCharactersString);

  var newPassword = '';

  for(var i = 0; i < length; i++){
    var randomIndex = (Math.floor(Math.random() * possibleCharactersString.length));
    newPassword += possibleCharactersString.charAt(randomIndex);
  }
    console.log(newPassword)

   return newPassword

  //needs to display new variable defined by generate password function

}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER


