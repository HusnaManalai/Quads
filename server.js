const express = require('express');
const mysql = require('mysql2');
const path = require('path');
//express is the framework: backend framework 
const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
    console.log('Dan and Hus');
});
