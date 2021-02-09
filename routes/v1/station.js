/* routes/v1/station.js */

const mongodb = require("mongodb");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	mongodb.MongoClient.connect("mongodb://127.0.0.1:27017/test20210209").then(client => {
		const db = client.db("test20210209");
		let cursor;
		if (req.query.code != undefined) {
			// GET http://localhost:3000/api/v1/station?id=<stationCode>
			cursor = db.collection("eki").find({
				stationCode: parseInt(req.query.code)
			});
		} else if (req.query.name != undefined) {
			// GET http://localhost:3000/api/v1/station?name=<stationName>
			cursor = db.collection("eki").find({
				stationName: req.query.name
			})
		}
		cursor.toArray((err, result) => {
			if (err) {
				res.json({
					message: "database error",
					error: err
				});
			} else {
				res.json({
					message: "success",
					result: result
				});
			}
		})
		client.close();
	});
})

module.exports = router;