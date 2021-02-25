
const url="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy";


const getQandA = async() => {

try {
  const data= fetch(url,{ method: "GET",})
    .then(response =>checkStatus(response) )
    .then(response => parseJSON(response))
    .then(response => response.results);

    return data
   
} catch (error) {
  return error;
}



}

function parseJSON(resp) {
 console.log(resp)
  return resp.json ? resp.json() : resp;
}

function checkStatus(resp) {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp) => {
    throw resp;
  })
}

export {getQandA};