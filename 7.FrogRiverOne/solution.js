function solution(X, A){
  let result = -1;
  let uniqArr = [];
  let counter = 0;
  let sum = X * (X + 1)/2;

  A.find((item, index) =>{
    if(!uniqArr.includes(item) && item <= X ){
      counter += item;
      uniqArr.push(item)
    }

    if (counter === sum) {
      result = index;
      counter = 0;
    }

  });

  console.log(result);
}

solution(5, [1, 3, 1, 4, 2, 3, 5, 1]);
