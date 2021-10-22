const express = require("express");
const app = express();
app.listen(9000, () => {
	console.log("Listening in port 9000");
});

app.use(express.json());

app.get("/project", () => {
	console.log("Fectch project details");
});
app.get("./skills", () => {
	console.log("Fectch skill details");
});
