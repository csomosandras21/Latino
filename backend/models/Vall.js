const mongoose = require('mongoose');

const vallSchema = new mongoose.Schema(
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
    

const VallModel = mongoose.model('Vall', vallSchema);

module.exports = VallModel;