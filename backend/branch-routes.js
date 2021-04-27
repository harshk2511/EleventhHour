const express = require('express');

const branchControllers = require('./branch-controllers');

const router = express.Router();

router.get('/:fid', branchControllers.getFiles);

router.post('/upload', branchControllers.createFile);

module.exports = router;

