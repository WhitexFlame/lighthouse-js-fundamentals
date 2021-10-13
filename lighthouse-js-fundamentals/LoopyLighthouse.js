let x = 100;

while (x <= 200) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (x % 3 === 0) {
    console.log("Loopy");
  }
  else if (x % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    console.log(x);
  }
  x = x + 1;
}

// on line 4 I first needed to indicate what happens with multiples of 3 & 4 before defining what happens to multiples of only 3 & multiples of only 4

// on line 7 I indicate what string is to be printed with multiples of 3

// on line 10 I indicate what string is to be printed with multiples of 4

// after each 'if' statement the follow up statements need to be 'else if' statements. unless the next 'if' statement is nested within the previous 'if' statement

