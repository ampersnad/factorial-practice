// Business Logic
// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

var f = [];
// var factorialsResult = function(n) {
//     if (n == 0 || n == 1)
//       return 1;
//     else if (f[n] > 0)
//       return f[n];
//     return
// }

var factorialsResult = function (n) {
  if (n === 2) {
    return n * (n-1);
  } else if (n === 0 || n === 1) {
    return 1;
  }
};




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
