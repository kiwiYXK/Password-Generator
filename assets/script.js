var generateBtn = document.querySelector("#generate");

var characterLength=[];
var chioceArr = [];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var speicalCharaArr= ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[',  ']','^','_','{','|','}','~'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];



function getPrompts(){
    chioceArr = [];
  characterLength = window.prompt("How many characters do you want your password to be ?(8-128 characters)");
    characterLength = parseInt(characterLength);
    if(isNaN(characterLength)||characterLength< 8 || characterLength>128){
        alert("Character has to be a number,8-128 characters,please try again!");
        return false;
    }
    if(confirm("Would you like lowerCase in your password?")){
        chioceArr = chioceArr.concat(lowerCaseArr);
    }
    if(confirm("Would you like upperCase in your password?")){
        chioceArr = chioceArr.concat(upperCaseArr);
    }
    if(confirm("Would you like special characters in your password?")){
        chioceArr = chioceArr.concat(speicalCharaArr);
    }
    if(confirm("Would you like number in your password?")){
        chioceArr = chioceArr.concat(numberArr);
    }
return true;
   }
   function generatePassword(){
    var password ="";
    for(var i=0; i< characterLength; i++){
       var randomIndex = Math.floor(Math.random() * chioceArr.length)
      password = password + chioceArr[randomIndex];
    }
    return password;
 }
  function writePassword(){
    getPrompts();
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  }


  generateBtn.addEventListener("click",writePassword);
 /*  generateBtn.addEventListener("click", writePassword); */