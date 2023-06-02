function findFirstDuplicate(arr) {
  const duplicates = []

  for (let i = 0; i < arr.length; i++) {
    if (duplicates.includes(arr[i])) {
      return arr[i];
    }
      duplicates.push(arr[i])
    }
    return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// in line 1, I set up a function that takes in an array
// In line 2, we are introducing a constant variable that equals an empty array, and this is where we are storing the frequency of each number
// Next, I set up a for loop that starts at 0, continues as long as i is less than the length of the array, and increments the count each time
// If the duplicates array includes the number, then we return that number.
// If not, it adds the number to the end of the duplicates array
// If there are no duplicates, the function returns -1
