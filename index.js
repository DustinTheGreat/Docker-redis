const express = require("express");
const mongoose  = require("mongoose");
const {MONGO_USER, MONGO_PASSWORD, MONGO_IP}  = require('config/config');
const app = express()



mongoose.connect("mongodb://username:password@ip:port:path")
.then(() => {console.log("Connected yo")
});
const port = process.env.PORT || 3003;


app.get("/", (req, res) => {
	res.send("<h1>Good Morning</h1>");
});

app.listen(port, () => console.log("listening"))

