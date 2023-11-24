const parseInputToNumArr = (input) => {
  const numbers = input.trim().split(",").map((a) => parseInt(a.replace(",", ""))).filter(Number); // parse comma seperated value to numbers array
  return numbers;
};

function sortArrayAssending(arr) {
    for (let i = 0; i < arr.length ; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        const element = arr[j];
        if (element > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
const binarySearch = (arr, target) => {
    let right = arr.length - 1; 
    let left = 0;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (arr[middle] == target) {
        return middle;
      }
      if (arr[middle] > target) {
        right = middle - 1; 
      }
      if (arr[middle] < target) {
        left = middle + 1;
      }
    }
    return -1;
}

const fibonacciSeries = (len) =>{
    if(len <=0 ) return; 
    let series = []; 
    if(len <=2){
        series = Array.from({length:len > 1 ? len : 1 } , (_,index) => index); // generate [0,1] series of array of lenght 2
        return series;
    }
    series = [0,1]; // since value is greater than 2 we have to start from [0,1];
    for (let i = 0 ; i < len - 1; i++) {
        const element = series[i];
        series.push(element + series[i+1]); // pushing values into array 
    }
    return series;
}

  
module.exports = {parseInputToNumArr , sortArrayAssending , binarySearch , fibonacciSeries}


