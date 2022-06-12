declare function log(n: i32): void


function add(a: i32, b: i32): i32 {
  log(a);
  log(b);
  return a + b;
}

function subtract(a: i32, b: i32): i32 {
  return a - b;
}

function multiply(a: i32, b: i32): i32 {
  return a * b;
}

function divide(a: i32, b: i32): i32 {
  if (b == 0) {
    abort();
  }
  return a / b;
}

function fizzbuzz(n: i32): string | null {
  if (n % 15 === 0) {
    return "fizzbuzz";
  }

  if (n % 3 === 0) {
    return "fizz";
  }

  if (n % 5 === 0) {
    return "buzz";
  }

  return null;
}

export {divide, multiply, subtract, add, fizzbuzz}