const add = (a, b) => a + b;

describe('Check add function', () => {
  test('should add work', () => {
    expect(add(1, 2)).toEqual(3);
  });

  it('add should work', () => {
    expect(add(2, 2)).toEqual(4);
  });
});
