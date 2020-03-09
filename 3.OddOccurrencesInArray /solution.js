function solution(A){

  let sortArr = A.sort((a, b) =>  a - b );

  let result = sortArr.filter((item, index) => {
    if(item !== A[index + 1] && item !== A[index - 1]){
      return item;
    }
  });

  return result[0]
}

solution([9.5, 3, 9.5, 3, 9, 7, 9]);
