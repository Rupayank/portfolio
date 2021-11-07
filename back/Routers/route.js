const express = require("express");
const router = express.Router();
const Domain = require("../Models/domain");
const Work = require("../Models/work");

router.get("/domain", async (req, res) => {
	// console.log("Hello from get domain route");
	const domains = await Domain.find();
	res.send({ message: "All domains", response: domains });
});
router.post("/domain", async (req, res) => {
	// console.log(req.body);
	const { name, description } = req.body;
	const domain = await Domain.create({ name, description });
	res.send({ message: "Added new domain", response: domain });
});

router.get("/work", async (req, res) => {
	const works = await Work.find();
	res.send({ message: "All works", response: works });
});
router.post("/work", async (req, res) => {
	try {
		const { projectName, companyName, url } = req.body;
		const work = await Work.create({ projectName, companyName, url });
		res.send({ message: "Added new work", response: work });
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = router;
