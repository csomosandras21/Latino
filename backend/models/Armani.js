const mongoose = require('mongoose');

const armaniSchema = new mongoose.Schema(
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
    

const ArmaniModel = mongoose.model('Armani', armaniSchema);

module.exports = ArmaniModel;