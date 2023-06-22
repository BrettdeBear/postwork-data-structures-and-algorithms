function recursiveCount(num = 0) {
  if (num >= 10) {
    return undefined;
  }
  console.log(num)
  recursiveCount(num + 1);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

// Line 1: defining a function and passing in the starting point (num = 0)
// Line 2: initiating an if statement - if the number is greater than or equal to 10, return undefined. 
  // We only want numbers 0-9 to print
// Line 5: Logging the number (initially tried that at the bottom, but didn't work) 
  // We do this before so that 0 is the starter number and gets printed first.
// Line 6: Call the function inside the function and pass in num + 1 -- this keeps going until we hit 10