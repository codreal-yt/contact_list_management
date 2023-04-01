const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error to run the server on: ${port}`);
    }
    console.log(`Server is running on: ${port}`);
})