const express = require('express');
const app = express();
const port = 3000;

function sendCpp(req , res){
    res.sendFile(__dirname + "/a.out")
}
app.get('/', sendCpp);

function sendHtml(req,res){
    res.sendFile(__dirname + "/index.html");
}
app.get('/sanchit', sendHtml);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
