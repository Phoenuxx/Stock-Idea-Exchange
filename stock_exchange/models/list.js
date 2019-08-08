const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: String,
    stockSymbols: Array
}) 

const List = mongoose.model('list', listSchema);

module.exports = List;