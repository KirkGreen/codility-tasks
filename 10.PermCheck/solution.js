function solution(A){

  const maxValue = Math.max.apply(Math, A);
  const uniqValue = new Set(A);
  const setLength = uniqValue.size;
  const arrLength = A.length;

  if(maxValue === setLength && arrLength === setLength){
    return 1
  } else {
    return 0
  }
}

solution([ 4, 1, 3, 2 ]);