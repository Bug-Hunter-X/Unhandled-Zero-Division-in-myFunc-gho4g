function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause unexpected behavior
  }
  return a / b;
}