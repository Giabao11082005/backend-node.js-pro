// const express = require("express");
import express from "express";
require("dotenv").config();
import webRoutes from "./routes/web";
import { join } from "path";
import getConnection from "./config/database";

const app = express();
const PORT = process.env.PORT || 3000;

//config template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//config static file
app.use(express.static("public"));

//config json req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config routes
webRoutes(app);

app.listen(PORT, function (err) {
  if (err) console.log("Error when start server: ", err);
  else console.log(`Server running on PORT ${PORT}`);
});
