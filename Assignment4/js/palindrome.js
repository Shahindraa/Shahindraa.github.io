function palindrome(str) {
    let newStr = str.toLowerCase().replace(/[\W_]/g, '');
     return newStr.split('').reverse().join('') === newStr;
   }
   
   let elBtnAnswer = document.getElementById("btnAnswer")
   elBtnAnswer.addEventListener("click", function(){
    let elPalindromeValue = document.getElementById("palindromeValue")
    alert("The palindrome value of word/sentence typed is:  " + palindrome(elPalindromeValue.value))
   })