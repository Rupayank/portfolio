const mongoose = require("mongoose");
const domainSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
});
module.exports = mongoose.model("Domain", domainSchema);
