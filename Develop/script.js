var generateBtn = document.querySelector("#generate");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

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
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? (Type Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please type Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="Yes"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="No"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please type Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}
//Function for numbers
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? (Type Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="Yes"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="No"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);