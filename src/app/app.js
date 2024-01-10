const express = require('express');
const router = require('../routes/product.routes');

require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("this is express");
});

app.use("/api", router);

module.exports = app;