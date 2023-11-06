const express = require('express');
const cors = require('cors');
const ReadDataFromPG = require('./controller/ReadDataFromPG')
require("dotenv").config()

const app = express();
app.use(cors());

app.use('/', ReadDataFromPG)

const port = process.env.PORT || 8080
app.listen(port,()=>{console.log("server start on port", port);});