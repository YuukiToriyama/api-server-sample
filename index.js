/* index.js */

const express = require("express");
const app = express();

// ルートディレクトリ
app.get("/", (req, res) => {
	res.send("api-server-sample: Hello, world");
})

// /api/v1/test
app.get("/api/v1/test", (req, res) => {
	const members = {
		"tanaka": [],
		"suzuki": [],
		"yasuda": []
	}

	let result;
	if (req.query.name) {
		let name = req.query.name;
		if (name in members) {
			result = members[name];
		} else {
			result = {"error": "no such member"}
		}
	} else {
		result = {"error": "invalid parameter"}
	}

	res.json(result);
})

app.listen(3000, () => {
	console.log("Listening on port 3000");
})
