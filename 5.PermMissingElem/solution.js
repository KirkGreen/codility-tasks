function solution(A){
  let length = A.length;
  let sum = (length + 1) * (length + 2) / 2;

  let currentArrSum = 0;

  if(A.length !== 0){
    currentArrSum = A.reduce((prevVal, currentVal)=>{
      return prevVal + currentVal;
    });
  }

  let result = sum - currentArrSum;

  console.log(result);

}

solution([2, 3, 1, 5]);
