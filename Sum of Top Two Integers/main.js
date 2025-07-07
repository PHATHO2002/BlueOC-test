const case1 = [1, 2, 2, 3, 3, 3];
const case2 = [1, 4, 2, 3, 5];
const case3 = [10, 20, 30, 10, 20, 10];
const case4 = [7, 8, 9, 10];

const findMaxAndDelete = (arr) => {
  let max = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  arr.splice(index, 1);
  return max;
};

const handle = (arr) => {
  let firstMax = findMaxAndDelete(arr);
  // xử lý trùng
  let filtered = arr.filter((x) => x !== firstMax);
  let secondMax = findMaxAndDelete(filtered);
  return firstMax + secondMax;
};

console.log(handle(case1));
