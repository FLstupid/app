require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const route = require("./route/base.route");
const db = require("./config/database.config");
cors = require('cors');

db.connectMogoDB();
const app = express();
app.use(express.json());
//HTTP logger
app.use(morgan("dev"));
app.use(cors());
route(app);
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listenning at port ${port}`));