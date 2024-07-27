console.log("Java Script");

//  Map

// In JavaScript, the map method is a powerful array method used to create a new array by applying a function to each element of an existing array.
//  The original array remains unchanged.

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

//  Filter
// The filter method in JavaScript is used to create a new array with all elements that pass a test implemented by a provided function.
//  This method does not change the original array.

function filterWithNormalFun(arr, num) {
  let newArr = [];
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    if (arr[i] > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filterWithNormalFun(arr, 20));

let filterData = arr.filter((ele, index, arr) => ele > 15);
console.log(filterData);

Array.prototype.myFilter = function (callBack) {
  let newArr = [];
  let l = this.length;
  for (let i = 0; i < l; i++) {
    if (callBack(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

let newFilValue = arr.myFilter((ele) => ele > 30);
console.log(newFilValue);

// Includes
// includes check value is present in array or not if value is there it return true else false

let a = arr.includes(20);
console.log(a);

Array.prototype.myIncludes = function (val) {
  let l = this.length;
  for (let i = 0; i < l; i++) {
    if (this[i] === val) {
      return true;
    } else {
      return false;
    }
  }
};

let b = arr.myIncludes(10);
console.log(b);
