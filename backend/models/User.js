const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    enrolledCourse: { type: Number, default: null },
});

module.exports = mongoose.model('User', userSchema);
