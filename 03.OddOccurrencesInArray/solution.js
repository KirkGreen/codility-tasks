// XOR (Exclusive Or) -  is a logical operation that outputs true only
// when inputs differ (one is true, the other is false)
// How it works with array [9, 3, 9, 3, 9, 7, 9] :
// 9 = 1001
// 3 = 0011
// 9 = 1001
// 3 = 0011
// 9 = 1001
// 7 = 0111
// 9 = 1001
//     0111 - even number 1 in the column is 0, odd - 1

function solution(A) {
  let result = 0;

  for (let item of A) {
    result ^= item
  }

  return result
}

solution([9, 3, 9, 3, 9, 7, 9]);
