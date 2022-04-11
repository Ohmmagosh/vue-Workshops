const express = require('express');
const app = express();
app.use(express.static(__dirname + '/uploaded'));

app.use("/api/v1", require("./api"));

app.listen(3000, () =>{
    console.log("server is running..");
})