describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });

  it('calls swap three times', function () {
  bubbleSort([3, 2, 1]);
  expect(swap.calls.count()).toEqual(3);
  });

  it('sorts an array', function () {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it('sorts an array', function () {
    expect(bubbleSort([8, 6, 7, 5, 3, 0, 9])).toEqual([0, 3, 5, 6, 7, 8, 9]);
  });

});

