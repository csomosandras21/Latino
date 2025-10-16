const mongoose = require('mongoose');

const diorSchema = new mongoose.Schema(
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
            type: Number,
            require: true
        },
        kepek: [{
            type: String  
        }]
}, {
    timestamps: true
});
    

const DiorModel = mongoose.model('dior', diorSchema);

module.exports = DiorModel;