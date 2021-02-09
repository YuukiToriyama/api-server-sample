/* routes/v1/station.js */

const mongodb = require("mongodb");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	mongodb.MongoClient.connect("mongodb://127.0.0.1:27017/test20210209").then(client => {
		const db = client.db("test20210209");
		if (req.query.code != undefined) {
			// GET http://localhost:3000/api/v1/station?id=<stationCode>
			db.collection("eki").find({
				stationCode: parseInt(req.query.code)
			}).toArray((err, result) => {
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
			});
		} else if (req.query.name != undefined) {
			// GET http://localhost:3000/api/v1/station?name=<stationName>
			db.collection("eki").find({
				stationName: req.query.name
			}).toArray((err, result) => {
				if (err) {
					res.json({
						result: err
					});
					console.error(err);
				} else {
					res.json({
						result: result
					})
				}
			});

		}
		client.close();
	});
})

module.exports = router;