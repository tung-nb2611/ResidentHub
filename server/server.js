const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app
const app = express();

// mongodb connection
const connectDB = require("./config/db");
connectDB(process.env.MONGO_URI);

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// route
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
