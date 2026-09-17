import { fibs, fibsRec, mergeSort } from "./recursion";

describe("my fib non recursive test suite", () => {
  test("test testing", () => {
    expect(1).toEqual(1);
  });

  test("Fib(0)", () => {
    expect(fibs(0)).toEqual([0]);
  });

  test("Fib(1)", () => {
    expect(fibs(1)).toEqual([0, 1]);
  });

  test("Fib(2)", () => {
    expect(fibs(2)).toEqual([0, 1, 1]);
  });

  test("Fib(3)", () => {
    expect(fibs(3)).toEqual([0, 1, 1, 2]);
  });

  test("Fib(4)", () => {
    expect(fibs(4)).toEqual([0, 1, 1, 2, 3]);
  });

  test("Fib(5)", () => {
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test("Fib(10)", () => {
    expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

describe("my fib recursive test suite", () => {
  test("test testing", () => {
    expect(1).toEqual(1);
  });

  test("Fib(0)", () => {
    expect(fibsRec(0)).toEqual([0]);
  });

  test("Fib(1)", () => {
    expect(fibsRec(1)).toEqual([0, 1]);
  });

  test("Fib(2)", () => {
    expect(fibsRec(2)).toEqual([0, 1, 1]);
  });

  test("Fib(3)", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1, 2]);
  });

  test("Fib(4)", () => {
    expect(fibsRec(4)).toEqual([0, 1, 1, 2, 3]);
  });

  test("Fib(5)", () => {
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test("Fib(10)", () => {
    expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

describe("Merge sort test", () => {
  test("Testing empty", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("Testing Single", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("Testing 1 2 3 4 5", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Testing sample 1", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("Testing sample 2", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });

  test("Testing empty", () => {
    expect(mergeSort([])).toEqual([]);
  });
});
