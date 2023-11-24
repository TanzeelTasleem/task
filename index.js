const { parseInputToNumArr, sortArrayAssending, binarySearch, fibonacciSeries } = require("./helpers");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput() {
  readline.question(`\nEnter your array values as comma-separated numbers like 9,11,...? `, (input) => {
    let numArr = parseInputToNumArr(input);
    console.log(`Your Entered Array is:`, numArr);

    let numbersArr = sortArrayAssending(numArr);
    console.log(`Your sorted Array is:`, numbersArr);

    readline.question(`\nEnter the value you need to search from the array? `, (num) => {
      const value = binarySearch(numbersArr, parseInt(num.trim().replace(",", "")));
      console.log(value !== -1 ? `Value found in array at position ${value}\n` : "Value not found in the array\n");

      readline.question("Enter the length for your Fibonacci series? ", (len) => {
        const series = fibonacciSeries(parseInt(len));
        console.log(`Your Fibonacci series of length ${parseInt(len)} is: `, series ? series : []);

        readline.question("\nDo you want to continue? (Enter -1 to exit, any other key to continue): ", (response) => {
          if (response.trim() === "-1") {
            readline.close();
          } else {
            // Continue the loop
            getUserInput();
          }
        });
      });
    });
  });
}

getUserInput();


