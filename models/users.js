const mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    kubikOwner: Boolean,
    filmsOwned: Object,
    key: Number,
})
// юзер по ID
userSchema.statics.getById = async function (id) {
    return await this.findOne({ _id: new mongoose.Types.ObjectId(id) }, { password: 0 });
}

// юзер по имени
userSchema.statics.getByName = async function (name) {
    return await this.findOne({ name }, { password: 0 });
}
module.exports = mongoose.model('User', userSchema);