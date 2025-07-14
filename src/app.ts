// const express = require("express");
import express from "express";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", (req, res) => {
  res.status(200).send("Hello world. I'm Gia bao");
});

app.listen(PORT, function (err) {
  if (err) console.log("Error when start server: ", err);
  else console.log(`Server running on PORT ${PORT}`);
});
