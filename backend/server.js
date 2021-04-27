const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const branchRoutes = require("./branch-routes");
const HttpError = require("./http-error");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  next();
});

app.use("/branches/files", branchRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://IT254_MiniProject_Team:nF8Zx9gqSdnL9JT@it254miniproject.vjv2o.mongodb.net/files?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
