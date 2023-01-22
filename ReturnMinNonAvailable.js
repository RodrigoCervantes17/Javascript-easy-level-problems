function solution(A) {
    let positive = new Set();
    for (let i = 0; i < A.length; i++) {
      if (A[i] > 0) {
        positive.add(A[i]);
      }
    }
    for (let i = 1; i <= 1000000; i++) {
      if (!positive.has(i)) {
        return i;
      }
    }
  }
  