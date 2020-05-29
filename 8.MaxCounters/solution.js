function solution(N, A){
  let counters = Array(N).fill(0);

  A.forEach((item)=>{
    if(item > counters.length){
      let maxValue = Math.max.apply(null, counters);
      counters.fill(maxValue);
    } else {
      ++counters[item - 1];
    }
  });

  console.log(counters);
}

solution(5, [3,4,4,6,1,4,4]);
