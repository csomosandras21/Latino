const mongoose = require('mongoose');

const gucciSchema = new mongoose.Schema(
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
    

const GucciModel = mongoose.model('gucci', gucciSchema);

module.exports = GucciModel;