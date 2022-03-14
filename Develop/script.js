var generateBtn = document.querySelector("#generate");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseConfirm;
var numberConfirm;
var specialConfirm;

//Function used to determine the length of the password
function determineLength(){
  passwordLength = prompt("How many characters would you like in your password? (Between 8-128)");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }
    return passwordLength;
}
//Function for uppercase letters
function determineUppercase(){
  uppercaseConfirm = prompt("Do you want to include uppercase letters in your password? (Type Yes or No)");
    uppercaseConfirm = uppercaseConfirm.toLowerCase();

    if (uppercaseConfirm === null || uppercaseConfirm === ""){
      alert("Please type Yes or No");
      determineUppercase();

    }else if (uppercaseConfirm === "yes" || uppercaseConfirm ==="Yes"){
      uppercaseConfirm = true;
      return uppercaseConfirm;

    }else if (uppercaseConfirm === "no" || uppercaseConfirm ==="No"){
      uppercaseConfirm = false;
      return uppercaseConfirm;
    
    }else {
      alert("Please type Yes or No");
      determineUppercase();
    }
    return uppercaseConfirm;
}
//Function for numbers
function determineNumbers(){
  numberConfirm = prompt("Do you want to include numbers in your password? (Type Yes or No)");
    numberConfirm = numberConfirm.toLowerCase();

    if (numberConfirm === null || numberConfirm === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberConfirm === "yes" || numberConfirm ==="Yes"){
      numberConfirm = true;
      return numberConfirm;

    }else if (numberConfirm === "no" || numberConfirm ==="No"){
      numberConfirm = false;
      return numberConfirm;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberConfirm;
}
//Function for special characters
function determineSpecial(){
  specialConfirm = prompt("Do you want to include special characters in your password? (Please type Yes or No)");
    specialConfirm = specialConfirm.toLowerCase();

    if (specialConfirm === null || specialConfirm === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialConfirm === "yes" || specialConfirm ==="Yes"){
      specialConfirm = true;
      return specialConfirm;

    }else if (specialConfirm === "no" || specialConfirm ==="No"){
      specialConfirm = false;
      return specialConfirm;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialConfirm;
}

 //Function to comebine input from other functions and generate a password 
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseConfirm);
  determineNumbers();
  console.log(numberConfirm);
  determineSpecial();
  console.log(specialConfirm);

var characters = lowercaseChar;
var password = "";
if (uppercaseConfirm && numberConfirm && specialConfirm){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseConfirm && numberConfirm){
  characters += uppercaseChar + numberChar;

}else if (numberConfirm && specialConfirm){
  characters += numberChar + specialChar;

}else if (uppercaseConfirm && specialConfirm){
  characters += uppercaseChar + specialChar;

}else if (uppercaseConfirm){
  characters += uppercaseChar;

}else if(numberConfirm){
  characters += numberChar;

}else if (specialConfirm){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);