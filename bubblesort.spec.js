describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
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

});

