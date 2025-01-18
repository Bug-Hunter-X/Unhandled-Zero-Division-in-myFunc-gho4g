# Unhandled Zero Division in JavaScript Function

This repository demonstrates a common JavaScript error: unhandled zero division. The `myFunc` function attempts to divide two numbers but doesn't properly handle the case where either input is zero, resulting in unexpected behavior (NaN or Infinity).

## Bug

The bug is located in `bug.js`. The `myFunc` function incorrectly handles the case where one or both of the input parameters (`a` and `b`) are zero.  Dividing by zero results in `Infinity` or `NaN` which may cause unexpected behavior in other parts of the program. 

## Solution

The solution is in `bugSolution.js`. The improved function explicitly checks for zero values and returns an appropriate value (e.g., 0 or an error message) rather than performing the division.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the function `myFunc` with different values. Notice the unexpected behavior when either input is zero.
3. Compare the behavior with the fixed function in `bugSolution.js`.