'use strict';

const data = [
  89, 30, 25, 32, 72,
  70, 51, 42, 25, 24,
  53, 55, 78, 50, 148, 32, 26, 2,
  14, 33, 45, 72, 521, 88, 27, 68,
  15, 62, 93, 98, 716, 46, 87, 28,
  65, 38, 67, 16, 823, 69, 64, 91,
  9, 70, 81, 27, 97, 88, 3, 7, 46,
  13, 11, 64, 76, 338, 28, 13, 17,
  69, 90, 1, 6, 7, 9, 73, 80, 98,
  46, 27, 22, 87, 46, 39, 42, 51,
  54, 84, 34, 53, 714, 5];

let count = 0;
function mSort(arr) {
  count++;
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let leftSide = arr.slice(0, middle);
  let rightSide = arr.slice(middle);
  mSort(leftSide);
  mSort(rightSide);
  merge(leftSide, rightSide, arr);
  return arr;
}

function merge(left, right, arr) {
  let i = 0; //keep track of left
  let j = 0; //keep track of right
  let k = 0; //keep track of new array
  while ((i < left.length) && (j < right.length)) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if (i < left.length) {
    for (i; i < left.length; i++) {
      arr[k] = left[i];
      k++;
    }
  }
  if (j < right.length) {
    for (j; j < right.length; j++) {
      arr[k] = right[j];
      k++;
    }
  }
  return arr;
}
console.log(mSort(data));
console.log(count);
