/*
0  = 0
1  = 0 1
2  = 0 1 1
3  = 0 1 1 2
4  = 0 1 1 2 3
5  = 0 1 1 2 3 5
6  = 0 1 1 2 3 5 8
7  = 0 1 1 2 3 5 8 13
8  = 0 1 1 2 3 5 8 13 21
9  = 0 1 1 2 3 5 8 13 21 34
10 = 0 1 1 2 3 5 8 13 21 34 55

f(0) = 0
f(1) = 0 1
f(2) = f(n-1) and {push f(n-1)[length-1] + f(n-2)[length-2]}
f(n) = f(n-1), push f(n-1)[length-1] + f(n-2)[length-1]
*/

function fibs(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }

  let myFibSeq = [0, 1];
  for (let i = 2; i <= n; i++) {
    myFibSeq.push(myFibSeq[i - 1] + myFibSeq[i - 2]);
  }

  return myFibSeq;
}

function fibsRec(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else if (n >= 2) {
    let previousLine = fibsRec(n - 1);
    let previousPreviousLine = fibsRec(n - 2);
    return [
      ...previousLine,
      previousLine[previousLine.length - 1] +
        previousPreviousLine[previousPreviousLine.length - 1],
    ];
  }
}

function mergeSort(n) {
  if (n.length <= 1) {
    return n;
  } else {
    //Split
    let midPoint = Math.floor(n.length / 2);
    let leftSide = n.slice(midPoint, n.length);
    let rightSide = n.slice(0, midPoint);
    let sortedLeftSide = mergeSort(leftSide);
    let sortedRightSide = mergeSort(rightSide);
    let sortedArray = sort(sortedLeftSide, sortedRightSide);
    return sortedArray;
  }
}

function sort(n, m) {
  let nPointer = 0;
  let mPointer = 0;
  let newArr = [];
  while (nPointer < n.length || mPointer < m.length) {
    if (n[nPointer] <= m[mPointer] || m[mPointer] === undefined) {
      newArr.push(n[nPointer]);
      nPointer++;
    } else {
      newArr.push(m[mPointer]);
      mPointer++;
    }
  }

  return newArr;
}

export { fibs, fibsRec, mergeSort };
