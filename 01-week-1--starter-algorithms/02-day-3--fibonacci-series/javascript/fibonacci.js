function fibonacci(num) {
  const output = []

  for (let i = 0; i <= num; i++) {
    if (i < 2) {
      output.push(i)
    } else {
      output.push(output[i - 1] + output[i - 2])
    }
  }
  return output[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// In line 1, I declare a function that takes in a specific number that represents the number of fibonacci numbers to generate
// Next, I set up a constant variable equal to an empty array. This is used to store all the fib numbers

// In line 4, there is a for loop that begins at 0, continues as long as i is less than or equal to the number passed into the function, and increments each time through
// In line 5, I set up an if statement. If the integer is less than 2, those numbers need to be added to the array so the series can begin
// If it is not <= 2, then we add to the array the sum of the previous two numbers 
// In line 11, we return the output of the number that was passed into the function.
