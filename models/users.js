const mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    kubikOwner: Boolean,
    filmsOwned: Object,
    key: Number,
})

module.exports = mongoose.model('User', userSchema);