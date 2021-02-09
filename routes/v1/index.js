/* routes/v1/index.js */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		message: "こんにちは"
	})
});

router.use("/station", require("./station.js"));

module.exports = router;