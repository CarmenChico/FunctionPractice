///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////



            //////////////////////
            //////////////////////
            ////              ////
            ////      Q1      ////
            ////              ////
            //////////////////////
            //////////////////////
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var sum = function (num1, num2) {
    return num1 + num2;
};

//another way to write the same thing
////////////////////////////////////////
//     function sum (num1, num2) {
//         return num1 + num2;
//     };



              //////////////////////
              //////////////////////
              ////              ////
              ////      Q2      ////
              ////              ////
              //////////////////////
              //////////////////////
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

//basic way to answer
////////////////////////////////////////
var avg = function (x, y, z) {

  var total = x + y + z;
  return total / 3;

};


//example of how to get an average from an array
// function arrayAvg (nums) {
//   var total = 0;
//
//   for (var i = 0; i < nums.length; i++) {
//     var currentItem = nums[i];
//     total = total + currentItem;
//   }
//
//   return total / nums.length;
//
// }
//
// console.log(arrayAvg([3,7,1]));



            //////////////////////
            //////////////////////
            ////              ////
            ////    Q3        ////
            ////              ////
            //////////////////////
            //////////////////////

// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var getLength = function (aString) {
  return aString.length;
};


// this is the other way to ask for the length without using the ".length" to call the function.

var getLengthNoBuiltin = function (aString) {
  var count = 0;
  while (aString[count] !== undefined) {
    count++;
  }

  return count;
};

getLengthNoBuiltin("")
>undefined






              //////////////////////
              //////////////////////
              ////              ////
              ////      Q4      ////
              ////              ////
              //////////////////////
              //////////////////////

// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function (nums1, nums2) {
  if (nums1 < nums2)
    return true;
  }
  else {
    return false;
  }
};





            //////////////////////
            //////////////////////
            ////              ////
            ////      Q5      ////
            ////              ////
            //////////////////////
            //////////////////////

// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet (single) {
  return "Hello, " + single + "!";
};
greet("Name")



// ////other way
// var greet = function (param) {
//
//
// };


            //////////////////////
            //////////////////////
            ////              ////
            ////      Q6      ////
            ////              ////
            //////////////////////
            //////////////////////
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madLib = function (sum, et, amisit, lux , est) {
   return "Ego" + sum + "Deus" + et + "non" + amisit + "Dominous" + lux + "mea" + est + "." ;

};


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
