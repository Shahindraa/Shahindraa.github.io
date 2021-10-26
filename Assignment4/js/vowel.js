console.clear()
function vowelCount (str) {
    var count = 0;
    var vowels = "aeiou";

    for (var i = 0; i < str.length; i++ ){
        if (vowels.indexOf(str[i].toLowerCase()) > -1){
            count++
        }
    }
    return count;
}

let elBtnAnswer = document.getElementById("btnAnswer")
elBtnAnswer.addEventListener("click", function(){
 let elVowelValue = document.getElementById("vowelValue")
 alert("The number of vowels in the word/sentence typed is: " + vowelCount(elVowelValue.value))
})