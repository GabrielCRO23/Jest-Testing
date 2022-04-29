const capitalize = require('./capitalize');
  
  test('hello to equal Hello', () => {
    expect(capitalize('hello')).toBe("Hello");
  });