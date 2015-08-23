// function fizzbuzz(max) {
//   for ( var i = 1; i <= max; i++ ) {
//     if (i % 5 == 0 && i % 3 == 0) {
//       print("FizzBuzz");
//     } else if ( i % 3 == 0 ) {
//       print("Fizz");
//     } else if (i % 5 == 0) {
//       print("Buzz");
//     } else {
//       print(i);
//     }
//   }
// }
// fizzbuzz(50)

// function fizzbuzzer(max) {

//   function check(n) {
//     var msg = '';
//     if ( n % 3 == 0 ) { msg += "Fizz" };
//     if ( n % 5 == 0 ) { msg += "Buzz" };
//     return msg || n;
//   }

//   for (var i = 1; i <= max; i++) {
//     print(check(i));
//   }

// }
// fizzbuzzer(50)

function fizzbuzzer(max) {
  var msg = ''; //Changes because that variable keeps its old value 
  function check(n) {
    
    if ( n % 3 == 0 ) { msg += "Fizz" };
    if ( n % 5 == 0 ) { msg += "Buzz" };
    return msg || n;
  }

  for (var i = 1; i <= max; i++) {
    print(check(i));
  }

}
fizzbuzzer(50)

