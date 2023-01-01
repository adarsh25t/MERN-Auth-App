const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    fname: { type: String},
    lname: { type: String},
    phone : { type : Number},
    address: { type: String},
    profile: { type: String}
});

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;