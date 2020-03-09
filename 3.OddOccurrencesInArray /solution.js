function solution(A) {
  let result = 0;

  for (let item of A) {
    result ^= item
  }

  return result
}

solution([9.5, 3, 9.5, 3, 9, 7, 9]);
