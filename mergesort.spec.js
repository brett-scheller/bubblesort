describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays', function() {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
});
