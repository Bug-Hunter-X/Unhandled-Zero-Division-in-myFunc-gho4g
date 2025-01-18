function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Or throw an error: throw new Error('Division by zero');
  }
  return a / b;
}