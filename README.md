# TypeScript Type Error: Argument of type string[] is not assignable to parameter of type string

This example demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.  The error arises because the function's parameter is strictly typed as a string, and the provided argument is an array.  The solution involves either modifying the function's signature to accept an array or iterating over the array and passing each element to the function individually.

## How to reproduce the bug

1.  Copy the code in `bug.ts`.
2.  Compile using the TypeScript compiler (tsc).
3.  Observe the error message.