// Ex1 Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
let a = 5;
let b = 10;

function sum(a, b) {
  if(a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}

console.log(sum(a, b));

// Ex2 Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function abs(a) {
  if(a <= 19) {
    return 19 - a;
  } else {
    return 3 * (a - 19);
  }
}

let c = 22;
console.log(abs(c));

// Ex3 A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

let d = '1234567890*';

function divByThree(a) {
  for(let i = 0;i <= 9;i++) {
    let b = a.replace('*', i);
    if(parseInt(b) % 3 == 0) {
      console.log(b);
    }
  }
}

divByThree(d);

// Ex4 A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

function divBySix(a) {
  for(let i = 0;i <= 9;i++) {
    let b = a.replace('*', i);
    if(parseInt(b) % 3 == 0 && parseInt(b) % 2 == 0) {
      console.log(b);
    }
  }
}

let e = '1*9'
divBySix(e);
