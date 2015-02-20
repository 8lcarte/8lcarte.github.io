function Printer(divId) {
  var lineCount = 1;
  
  this.printLine = function() {
    var m = lineCount + ': ';
    
    for (var i = 0; i < arguments.length; i++) {
      m += arguments[i] + ' ';
    }

    var n = document.createElement("pre"),
        t = document.createTextNode(m);

    n.appendChild(t);
    document.getElementById(divId).appendChild(n);
    
    lineCount++;
  }
}


// create both printers
var fizzbuzzPrinter  = new Printer('fizzbuzz'),
    fizzbuzzerPrinter = new Printer('fizzbuzzer');

// create both print functions
var fzPrint = fizzbuzzPrinter.printLine,
    frPrint = fizzbuzzerPrinter.printLine;


function fizzbuzz(max) {
  for ( var i = 1; i <= max; i++ ) {
    if (i % 5 == 0 && i % 3 == 0) {
      fzPrint("FizzBuzz");
    } else if ( i % 3 == 0 ) {
      fzPrint("Fizz");
    } else if (i % 5 == 0) {
      fzPrint("Buzz");
    } else {
      fzPrint(i);
    }
  }
}

fizzbuzz(20);



function fizzbuzzer(max) {
  
  function check(n) {
    var msg = '';
    if ( n % 3 == 0 ) { msg += "Fizz" };
    if ( n % 5 == 0 ) { msg += "Buzz" };
    return msg || n;
  }
  
  for (var i = 1; i <= max; i++) {
    frPrint(check(i));
  }
  
}

fizzbuzzer(30);
