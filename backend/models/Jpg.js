const mongoose = require('mongoose');

const jpgSchema = new mongoose.Schema(
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
    

const JpgModel = mongoose.model('jpg', jpgSchema);

module.exports = JpgModel;