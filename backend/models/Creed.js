const mongoose = require('mongoose');

const creedSchema = new mongoose.Schema(
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
    

const CreedModel = mongoose.model('creed', creedSchema);

module.exports = CreedModel;