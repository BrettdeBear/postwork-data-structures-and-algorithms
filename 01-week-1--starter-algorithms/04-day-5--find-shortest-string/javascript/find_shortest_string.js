function findShortestString(arr) {
  let shortestString = arr[0];

  arr.forEach(element => {
    if (element.length < shortestString.length) {
      shortestString = element;
    }
  })
  return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  // const startTime = Date.now();

  // for (let i = 0; i < 1000; ++i) {
  //   findShortestString(['dogbaby', 'cat', 'jammy', 'hamtaro']);
  // }

  // const avgTime = (Date.now() - startTime) / 1000;
  // console.log(avgTime);

}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Brainstorming:

// Step 1--estab var that has index of element?
// Step 2--iterate over each element, and if it's shorter than the one in the variable, we make that the variable. 

// Explanation: 

// Line 1: Define function that takes in an array
// Line 2: establish variable that is index 0 of the array (originally did const, but that wasn't the move because it couldn't change)
// Line 4: iterate through each element of the array
// Line 5: If the length of that element is shorter than the shortestString variable, 
// Line 6: change the shortestString to that element (that element takes its place)
// Line 9: shortestString is returned

