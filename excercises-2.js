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
// this can also be written a little bit more simple:
//function cleanerIsVowel (char) {
//    var vowels = ["a" , "e" , "i" , "o" , "u"];
//    return vowels.includes(char.toLowerCase());
//};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}
