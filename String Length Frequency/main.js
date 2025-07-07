const arr1 = ["apple", "dog", "cat", "hi", "sun", "bee"];
const arr2 = ["one", "two", "three", "four", "five"];
const arr3 = ["a", "bb", "ccc", "dddd", "eeeee"];
const arr4 = ["a", "ab", "abc", "cd", "def", "gh"];
const findMaxFrequency = (obj) => {
  //tìm độ dài chuỗi xuất hiện nhiều nhất
  let max = [];
  for (let key in obj) {
    if (obj[key].length > max.length) {
      max = obj[key];
    }
  }
  return max;
};
const handle = (arr) => {
  let lengthOfStrings = {};
  for (let i = 0; i < arr.length; i++) {
    let length = arr[i].length;
    if (length in lengthOfStrings) {
      lengthOfStrings[length].push(arr[i]);
    } else {
      lengthOfStrings[length] = [arr[i]];
    }
  }

  console.log(findMaxFrequency(lengthOfStrings));
};
handle(arr4);
