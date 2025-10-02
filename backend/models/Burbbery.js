const mongoose = require('mongoose');

const burbberySchema = new mongoose.Schema(
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
    

const BurbberyModel = mongoose.model('Burbbery', burbberySchema);

module.exports = BurbberyModel;