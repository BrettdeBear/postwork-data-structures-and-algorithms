function selectionSort(arr) {
  const sortedArr = [];

  while (arr.length > 0) {
    const low = Math.min(...arr);
    const ind = arr.indexOf(low);

    sortedArr.push(low);
    arr.splice(ind, 1);
  }
  return sortedArr;
}
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j
//       }
//     }
//     if (lowest !== i) {
//       // Swap
//       ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
//     }
//   }
//   return arr
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Line 1: Defining function that takes in an array 
// Line 2: Defining a constant variable that I will use to store the sorted numbers
// Line 4: Establishing a while loop that runs as long as the array length is greater than 0.
// Line 5: Defining a variable called low that finds the minimum number in the original array.
// The spread operator passes each element of arr into the function on its own
// Line 6: Defining a variable called ind that finds the index of low
// Line 8: Pushing low onto the end of the sortedArr
// Line 9: This removes the minimum value from the array, it removes only that one number.
// Line 11: This will return the sorted array 

// I have also included one solution with a nested for loop, but the time complexity was much worse.