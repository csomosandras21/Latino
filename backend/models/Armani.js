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
            type: Number,
             require: true
        },
        kepek: [{
            type: String  
        }]
}, {
    timestamps: true
});
    

const ArmaniModel = mongoose.model('armani', armaniSchema);

module.exports = ArmaniModel;