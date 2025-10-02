const mongoose = require('mongoose');

const lattafaSchema = new mongoose.Schema(
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
    

const LattafaModel = mongoose.model('Lattafa', lattafaSchema);

module.exports = LattafaModel;