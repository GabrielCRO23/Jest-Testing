const Calculator = require('./calculator');
  
  test('adds 5 and 10 to equal 15', () => {
    expect(Calculator.add(5, 10)).toBe(15);
  });

  test('subtracts 10 and 5 to equal 5', () => {
    expect(Calculator.sub(10, 5)).toBe(5);
  });

  test('multiplies 5 and 10 to equal 50', () => {
    expect(Calculator.multiply(5, 10)).toBe(50);
  });

  test('divides 10 and 5 to equal 2', () => {
    expect(Calculator.divide(10, 5)).toBe(2);
  });