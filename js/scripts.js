// Business Logic
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// var f = [];
// // var factorialsResult = function(n) {
// //     if (n == 0 || n == 1)
// //       return 1;
// //     else if (f[n] > 0)
// //       return f[n];
// //     return
// // }
// var iArray = forEach
//
// for (var i = n; i === 1; i -= 1) {
//
// }






// var factorialsResult = function (n) {
//   if (n === 2) {
//     return n * (n-1);
//   } else if (n === 0 || n === 1) {
//     return 1;
//   }
// };






// Ryan logic
// var counter = 1;
// var factorial = function(n) {
//   for (var i = n; i > 1; i--) {
//     counter = counter * i;
//   }
// };





// ryan logic ends
function factorialsResult(n) {
  var counter = 1;
  for (var i = 1; i <= n; i++) {
    counter *= i;
  }
  return counter;
  console.log(counter);
}








// User Logic
$(document).ready(function() {
  $("form#factorials").submit(function(event) {
    event.preventDefault();
    var n = parseInt($("input#value").val());
    console.log("user input", n);
    var result = factorialsResult(n);
    console.log("function result", result);
    // $(".year").text(year);
    //
    // if (!result) {    // same as writing if (result ==== false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }


    $("#result").text(result);
    console.log(result);
  });
});
