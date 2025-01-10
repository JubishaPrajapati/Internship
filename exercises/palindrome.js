function isPalindrome(str) {
  const stringLen=str.length;
  
  for(let i=0; i<stringLen/2;i++){
    //console.log({ first: str[i], last: str[stringLen-1-i], stringLen, i});
    if(str[i]!== str[stringLen-1-i]){
      console.log("It is not a palindrome");
      return;
    }
  }
  
  console.log("It is a palindrome");
}

isPalindrome("abcba");



//using methods
function checkPalindrome(){
  const string2="level";
  
  let changing= string2.split('').reverse().join('');
  if(string2===changing){
    console.log("It is a palindrome");
  }else{
    console.log("It is not a palindrome");
  }
}
checkPalindrome();