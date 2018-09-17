function swap(array, a, b) {
  const aval = array[a];
  const bval = array[b];
  array[a] = bval;
  array[b] = aval;
}

function split(array) {
  const middle = Math.floor(array.length / 2) + 1;
  const firstHalf = array.slice(0, middle);
  const secondHalf = array.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let i1 = 0;
  let i2 = 0;
  let retArr = [];
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[i1] < arr2[i2]) {
      retArr.push(arr1[i1++]);
    } else {
      retArr.push(arr2[i2++]);
    }
  }
  return retArr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
}
