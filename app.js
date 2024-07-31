// Qustion 01

function power(a, b) {
  if (b === 0) {
    return 1
  }
  var result = a
  for (var i = 1; i < b; i++) {
    result *= a
  }

  return result
}

var userNum = +prompt("Enter the num")
var powerNUm = +prompt("Enter the power num")
alert(power(userNum, powerNUm));

// Qustion 02

// function isLeapYear(year){
//   if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkLeapYear() {
//   var year = +prompt("Enter year");
//   if(year !== ''){
//     var result = isLeapYear(parseInt(year));

//   }
// }

// Qustion 03

// function calculateSemiPerimeter(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//   var s = calculateSemiPerimeter(a, b, c);
//   return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// function calculateTriangleArea() {
//   var sideA = parseFloat(prompt("Enter a side A value"));
//   var sideb = parseFloat(prompt("Enter a side b value"));
//   var sidec = parseFloat(prompt("Enter a side c value"));

//   if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
//     return "Please enter valid positive numbers for all sides."
//   }


//   var area = calculateArea(sideA, sideB, sideC);
//   if (isNaN(area) || area <= 0) {
//     return "The given sides do not form a valid triangle."
//   } else {
//     return "The area of the triangle is "
//   }

// }

// alert(calculateTriangleArea())
// alert(calculateArea())

// Qustion 04

function calculateAverage(marks1, marks2, marks3) {
  return (marks1 + marks2 + marks3) / 3;
}

function calculatePercentage(marks1, marks2, marks3, totalMarks) {
  return ((marks1 + marks2 + marks3) / (totalMarks * 3)) * 100;
}

function mainFunction() {
  var marks1 = parseFloat(prompt("enter mark num 1"))
  var marks2 = parseFloat(prompt("enter mark num 2"))
  var marks3 = parseFloat(prompt("enter mark num 3"))

  if (isNaN(marks1) || isNaN(marks2) || isNaN(marks3) || marks1 < 0 || marks2 < 0 || marks3 < 0) {
    return "please enter valid marks for all subjects"
  }

  var totalMarks = 100;
  var average = calculateAverage(marks1, marks2, marks3);
  var percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);

  return `Average Marks: ${average.toFixed(2)}\nPercentage: ${percentage.toFixed(2)}%`
}

alert(mainFunction());

// Qustion 05

function customIndexOf(string, letter) {
  var i = 0
  while (i < string.length) {
    if (string[i] === letter) {
      return i
    }
    i++
  }
  return -1
}

var str = prompt("Enter a string: ")
var ltr = prompt("Enter a letter: ")
alert(customIndexOf(str, ltr));


// Qustion 06

function deleteVowel(str) {
  var vowel = "aeiouAEIOU"
  var result = ""

  var i = 0;
  while (i < str.length) {
    if (vowel.indexOf(str[i]) === -1) {
      result += str[i]
    }
    i++
  }
  return result
}

var userString = prompt("Enter any sentence")
alert(deleteVowel(userString));

// Qustion 07


function countVowelPairs(text) {
  var count = 0;
  var i = 0;
  while (i < text.length - 1) {
    var char1 = text[i].toLowerCase()
    var char2 = text[i + 1].toLowerCase()
    var vowelPairs = []

    switch (true) {
      case (char1 === "a" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
      case (char1 === "e" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
      case (char1 === "i" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
      case (char1 === "o" && (char2 === "o" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
      case (char1 === "u" && (char2 === "o" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):

        count++
        vowelPairs.push(char1 + char2)
        console.log(vowelPairs)
        break
    }
    i++
  }
  return count;
}

alert(countVowelPairs("Please read this application and give me gratuity"));

// Qustion 08

function convertToMeters(distanceInKm) {
  return distanceInKm * 1000;
}

function convertToFeet(distanceInKm) {
  return distanceInKm * 3280.84;
}

function convertToInches(distanceInKm) {
  return distanceInKm * 39370.1;
}

function convertToCentiMeters(distanceInKm) {
  return distanceInKm * 100000;
}

function convertDistance() {
  var distanceInKm = parseFloat(prompt("Enter the Distance in Km"))

  if (isNaN(distanceInKm) || distanceInKm < 0) {
    return "please enter a valid distance in kilometers"

  }

  var meters = convertToMeters(distanceInKm)
  var feet = convertToFeet(distanceInKm)
  var inches = convertToInches(distanceInKm)
  var centiMeters = convertToCentiMeters(distanceInKm)

  return `Distance in Meters: ${meters.toFixed(2)} m\n` +
    `Distance in Feet: ${feet.toFixed(2)} ft\n` +
    `Distance in Inches: ${inches.toFixed(2)} in\n` +
    `Distance in Centimeters: ${centiMeters.toFixed(2)} cm`;

}


alert(convertDistance())

// Qustion 09

function calculateOverTimePay() {
  var hoursWorked = parseInt(prompt("Enter hours worked"))
  var overTimeRate = 12.00;
  var regularHours = 40;
  var overTimePay = 0;

  if (isNaN(hoursWorked) || hoursWorked < 0) {
    return "Please Enter a valid Number of hours"
  }

  else if (hoursWorked > regularHours) {
    var overtimeHours = hoursWorked - regularHours;
    overTimePay = overtimeHours * overTimeRate;
  }

  return `Overtime Pay: Rs. ${overTimePay.toFixed(2)}`;
}

alert(calculateOverTimePay());

// Qustion 10

function currencyNoteCalculator(amount) {
  var note100 = Math.floor(amount / 100)
  var remainingAmount = amount % 100

  var note50 = Math.floor(remainingAmount / 50)
  var remainingAmount = remainingAmount % 50

  var note10 = Math.floor(remainingAmount / 10)

  return [note100, note50, note10]
}

var am = prompt("Enter your amount")
var result = currencyNoteCalculator(am);
console.log("Note 100: " + result[0])
console.log("Note 50: " + result[1])
console.log("Note 10: " + result[2])