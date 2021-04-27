const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    nameofdoc: {type: String, required: true},
    branch: {type: String, required: true},
    doctype: {type: String, required: true},
    course: {type: String, required: true}
});

module.exports = mongoose.model('File', fileSchema);