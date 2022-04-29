const reverseString = require('./reverseString');
  
  test('hello to equal olleh', () => {
    expect(reverseString("hello")).toBe("olleh");
  });