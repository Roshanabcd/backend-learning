// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: Number
},{timestamps: true});

// module.exports = mongoose.model("User", userSchema);
export default mongoose.model("User", userSchema);