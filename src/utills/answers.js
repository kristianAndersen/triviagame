
let answer=[];

export const getAnswers=function(q){
 
    for (let i = 0; i < q.length; i++) {
      answer.push(
          q[i].correct_answer.concat(
            "," + q[i].incorrect_answers
          )
        );
      }

      for (let i = 0; i < answer.length; i++) {
        answer[i] = shuffle(answer[i]);
      }


      return answer;
}

function shuffle(s) {
    let returnArr = [];
    let arr = s.split(",");
    let i = arr.length,
      k,
      temp; 
    while (--i > 0) {
      k = Math.floor(Math.random() * (i + 1));
      temp = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
    }
  
    returnArr.push(arr);
    return returnArr.flat();
  }