describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays", function() {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe("mergeSort function", function() {
  it("is able to sort an array", function() {
    expect(mergeSort([8, 6, 7, 5, 3, 0, 9])).toEqual([0, 3, 5, 6, 7, 8, 9]);
  });
});
