console.clear()
function factorial (n) {
  let temp = n
  for (let i = n - 1; i > 0; i--){
    temp *= i
  }
  return temp
}

let elBtnAnswer = document.getElementById("btnAnswer")
elBtnAnswer.addEventListener("click", function(){
 let elFactorialValue = document.getElementById("factorialValue")
 alert("The factorial value of number typed is: " + factorial(elFactorialValue.value))
})