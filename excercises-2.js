// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1>num2) {
      return num1;
    } else {
      return num2;
    }
  };
  // pay close attn o the arragment of the curly braces.


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
      if (a>=b && a>=c) {
        return a;
      } else if (b>=a && b>=c) {
        return b;
      } else {
        return c;
      }
//the && makes the system continue to look at the next section without skipping over it to the begining and returning an answer
};
//the


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
// the following is probably questionable to be written as such... but it is or
function isVowel (char) {
    if (char === "a" ||
        char === "A" ||
        char === "e" ||
        char === "E" ||
        char === "i" ||
        char === "I" ||
        char === "o" ||
        char === "O" ||
        char === "u" ||
        char === "U") {
          return true;
        }
          else {
            return false;
          }
};
// this can also be written a little bit more simple, by separtating the uppercase letters and making them all lowercase with .toLowerCase ()

//function cleanerIsVowel (char) {
//    var vowels = ["a" , "e" , "i" , "o" , "u"];
//    return vowels.includes(char.toLowerCase());
//};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function cleanerIsVowel (char) {
    var vowels = ["a" , "e" , "i" , "o" , "u"];
    return vowels.includes(char.toLowerCase());
};

function translate(phrase){
    var combinedPhrase= "";
    // we add a conditional -- that will double it(if)
    // we have to loop over the phrase, to love over each letter. We'll need a "for loop"
    for (var count = 0; count <phrase.length; count++) {
      var letter = phrase[count];
      if (isVowel(letter) || letter === " ") {
            combinedPhrase += letter;
          } else {
            combinedPhrase += letter + "o" + letter;
          }
        }
          return combinedPhrase;
      };
  console.log (translate("Bippity Boppity Boo"));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(deus) {
    return deus.split ("").reverse().join("");

    }
    reverse("billy goat");


  //reversing a string is a little different than get length

  //approach 1
  //build an empty array and use a stack  (stack is a data structure) (stack can be used to put something on top, or remove something from the top)
    // function reverse (opposite) {
    //     //we make them into arrays, as so that we can use them separately
    //   //  var letters = [];
    //
    //   for (var count = 0; count <string.length; count++){
    //     var letter = opposite[count];
      //  letters.push.(letter);
//push is putting it at the back ... so this doesn't work here.
//      google array.mdn
// array.join puts it all together and puts it in a string ...

  //       letters.unshift.(letter);
  //     }
  //     return letters.join ("");
  // };

  //then in the console we put "reverse 'cookies'""


  // another way . These are algorithms. (notes from class)

  // function reverseAlt (sting) {
  // var newString= "";
  // for (var count = sting.length - 1; count >= 0; count --) {
  //   var letter = string [count];
  //   newString+= letter;
  // }
  // return newString;
  // };
  //

  //then in the console we put "reverseAlt 'cookies'"
