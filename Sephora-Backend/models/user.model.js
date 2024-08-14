const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    ZIP: { type: Number, required: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;