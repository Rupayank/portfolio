const mongoose = require("mongoose");
const workSchema = new mongoose.Schema({
	projectName: { type: String, required: true, unique: true },
	companyName: String,
	url: String,
});
module.exports = mongoose.model("Work", workSchema);
