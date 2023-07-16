const express = require('express');
const app = express();
const port = 3000;

function sendCpp(req , res){
    res.sendFile(__dirname + "/a.out")
}
app.get('/cpp', sendCpp);

function sendHtml(req,res){
    res.sendFile(__dirname + "/index.html");
}
app.get('/sanchit', sendHtml);

function calculate(counter){
    var answer = 0
    for (let i = 0; i < counter; i++) {
        answer++;
    }
    return answer;
}

function handleSum(req , res){
    var counter = req.query.counter; // took from query which can be also {header , json}
    var calculatedSum = calculate(counter);
    var answeObj = {
        sum : calculatedSum,  // json
    }
    res.send(answeObj);
}

app.get('/handleSum' , handleSum);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
