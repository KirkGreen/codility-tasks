function solution(N) {
  let binaryVal = N.toString(2);
  let zeroBinaryArr = binaryVal.split(1);

  let sortArr = zeroBinaryArr
    .filter(
      (item, i, arr) => {
        if(item !== '' && arr[arr.length -1] === ''){
          return true
        } else if (arr[arr.length -1] !== ''){
          arr[arr.length -1] = ''
        }
      }
    )
    .sort(
      (a, b) => {
        return a.length - b.length;
      }
    );

  if ( sortArr.length){
    return sortArr[sortArr.length-1].length;
  } else {
    return 0
  }
}
