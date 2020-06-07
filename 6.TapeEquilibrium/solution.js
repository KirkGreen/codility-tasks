function solution(A){

  let firstSum = 0;
  let secondSum = A.reduce((a,b) => a + b );
  let result = [];

  for (let i = 0; i < A.length -1; i++) {

    firstSum += A[i];
    result.push(Math.abs((firstSum * 2)  - secondSum));

  }

  console.log(Math.min.apply(Math, result))

}

solution([3, 1, 2, 4, 3]);
