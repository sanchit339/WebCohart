/*
    to communicate between servers
*/
function logResponseBody(jsonBody){
    console.log(jsonBody)
}

function callBack(result){
    result.json().then(logResponseBody)
}

var callObj = { // json format
    method : "GET"
};

fetch("http://localhost:3000/handleSum?counter=100" , callObj).then(callBack)