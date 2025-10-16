const mongoose = require('mongoose');

const dgSchema = new mongoose.Schema(
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
    

const DgModel = mongoose.model('dg', dgSchema);

module.exports = DgModel;