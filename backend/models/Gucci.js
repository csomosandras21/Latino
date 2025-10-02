const mongoose = require('mongoose');

const gocciSchema = new mongoose.Schema(
    {
        nev:{
            type: String,
            require: true,
        },
        fajta: {
            type: String,
            required: true
        },
        ar: {
            type: Number
        },
        kepek: [{
            type: String  
        }]
}, {
    timestamps: true
});
    

const GocciModel = mongoose.model('Gocci', gocciSchema);

module.exports = GocciModel;