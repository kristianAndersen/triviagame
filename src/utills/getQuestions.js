
let questions=[];

export const getQuestion=function(q){

    for (let i = 0; i < q.length; i++) {
        questions.push(q[i].question);
      }
    
  return questions;   
}