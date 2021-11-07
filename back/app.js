const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routers/route");
const cors = require("cors");

const app = express();
const dbUrl = "mongodb://localhost/portDB";
mongoose.connect(dbUrl);
const con = mongoose.connection;
con.on("open", () => console.log("Connected to db"));

app.listen(3340, () => console.log("Listening"));
app.use(express.json());
app.use(cors());
app.use("/", router);
