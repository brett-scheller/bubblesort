function bubbleSort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
  }
  return array;
}

function swap(array, a, b) {
  const aval = array[a];
  const bval = array[b];
  array[a] = bval;
  array[b] = aval;
}
