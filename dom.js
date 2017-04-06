var answer = Math.ceil(Math.random()*100)
var numberOfGuesses = 0 < 7
var enterName = document.getElementById("enterName").innerHTML

function enterName() {
  if (enterName != )
}
// function userName(){
//   var name = document.getElementById("nombre").value
// }

function hiLo() {
  var number = parseInt(document.getElementById("user-input").value)
  var name = document.getElementById("nombre").value
  if(Number.isNaN(number)) {
    alert("Only numbers!")
    document.getElementById("result").innerHTML = "Only numbers, fool!"
  } else {
    while((number > answer) && (numberOfGuesses < 7)) {
      document.getElementById("result").innerHTML = "Guess lower!"
      numberOfGuesses++
    } if (number < answer && numberOfGuesses < 7) {
      document.getElementById("result").innerHTML = "Guess higher!"
      numberOfGuesses++
    } else if (number == answer && numberOfGuesses <= 7) {
      document.getElementById("result").innerHTML = "You win at life!"
      numberOfGuesses++
    }
    else {
      document.getElementById("result").innerHTML = "Give us more money if you ever want to guess again!"
    }
  }
}








// //about to test/change code below
// var answer = Math.ceil(Math.random()*100)
// var numberOfGuesses = 0 < 7
// var requirements = (0 < number < 101)
//
// function hiLo() {
//   var number = parseInt(document.getElementById("user-input").value)
//   var requirements = (0 < number < 101)
//   if(requirements = false) {
//     alert("Only numbers!")
//     document.getElementById("result").innerHTML = "Only numbers, fool!"
//   } else {
//     while((number > answer) && (numberOfGuesses < 7)) {
//       document.getElementById("result").innerHTML = "Guess lower!"
//       numberOfGuesses++
//     } if (number < answer && numberOfGuesses < 7) {
//       document.getElementById("result").innerHTML = "Guess higher!"
//       numberOfGuesses++
//     } else if (number == answer && numberOfGuesses <= 7) {
//       document.getElementById("result").innerHTML = "You win at life!"
//       numberOfGuesses++
//     }
//     else {
//       document.getElementById("result").innerHTML = "Give us more money if you ever want to see your guesses again!"
//     }
//   }
// }
// //
