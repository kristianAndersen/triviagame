
const url="https://opentdb.com/api.php?amount=11&category=9&difficulty=easy";

const getQandA = async() => {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  let index = 0; 
  let data = jsonResponse.results.map((question) => {
    // merge answers and question into single array
    question.answers = [question.correct_answer,...question.incorrect_answers];
    question.rightAnswer = null;
    question.key = index;
    index++;
 
    shuffle(question.answers) 
  

    return question;
  });

return data
}
export {getQandA};

/**Fisher–Yates shuffle*/
function shuffle(s) {
 
  let returnArr = [];
  let arr = s

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