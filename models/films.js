const mongoose = require('mongoose');


let filmSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
})

module.exports = mongoose.model('Films', filmSchema);