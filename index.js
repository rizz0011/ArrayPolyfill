console.log("Java Script");

let arr = [10, 20, 30, 45, 60];

function withMap(arr, mul) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * mul);
  }
  return newArr;
}
console.log(withMap(arr, 2));

let newArr = arr.map((ele, index, arr) => ele * 10);
console.log(newArr);

Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

let newArrResult = arr.myMap((ele, index, arr) => ele * 3);
console.log(newArrResult);
