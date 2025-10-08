const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nev: { type: String, required: true },
    statusz: { type: String, default: 'aktív' }
});

module.exports = mongoose.model('User', userSchema);
