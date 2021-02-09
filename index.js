/* index.js */

const express = require("express");
const bodyParser = require("body-parser");


// 設定
const app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// GET http://localhost:3000/api/v1/
const v1 = require("./routes/v1/index.js");
app.use('/api/v1', v1);

// 起動
app.listen(port);
console.log("listen on port " + port);