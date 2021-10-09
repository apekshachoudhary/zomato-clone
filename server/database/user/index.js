import mongoose from "mongoose";

const UserSchema = new maongoose.Schema({
    fullname: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String},
    address: [{ details: {type: String}, for: {type: String} }],
    phoneNumber: [{type: Number}]
},{
    timestamps: true
});

export const UserModel = maongoose.model('Users', UserSchema);