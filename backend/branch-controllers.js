const File = require("./file-model");
const HttpError = require("./http-error");
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const DUMMY_FILES = [
  {
    id: "b1",
    Name: "IT254 Midsem",
    Type: "PDF",
    Branch: "IT",
  },
];

const getFiles = async (req, res, next) => {
  const fileId = req.params.fid;
  let file;
  try {
    file = await File.findById(fileId);
  } catch (err) {
      //Problem in GET request (missing info)
    const error = new HttpError("Something went wrong", 500);
    return next(error);
  }
  //If there is no fileid in database
  if (!file) {
    const error = new HttpError("Could not find file with that ID", 404);
    return next(error);
  }
  //Convert mongoose obj to javascript object
  //getters adds an id property to created object (without underscore)
  res.json({ file: file.toObject({ getters: true }) });
};

const createFile = async (req, res, next) => {
    //app.use(bodyParser.urlencoded({ extended: true }));
//   const { nameofdoc, type, branch } = req.body;
//   const createdFile = new File({
//     nameofdoc,
//     type,
//     branch,
//   });

//   //DUMMY_FILES.push(createdFile);
//   try {
//     await createdFile.save();
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
app.use(bodyParser.urlencoded({ extended: true }));
const { nameofdoc, course, branch, doctype } = req.body;
  const createdFile = new File({
    nameofdoc: nameofdoc,
    branch: branch,
    doctype: doctype,
    course: course
  });

  //DUMMY_FILES.push(createdFile);
  try {
    await createdFile.save();
  } catch (err) {
    console.log(err);
    return next(err);
  }
  res.status(201).json({ file: createdFile });
};

exports.getFiles = getFiles;
exports.createFile = createFile;
