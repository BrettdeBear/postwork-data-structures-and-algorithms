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
