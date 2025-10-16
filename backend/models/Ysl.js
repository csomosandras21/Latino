const mongoose = require('mongoose');

const yslSchema = new mongoose.Schema(
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
    

const YslModel = mongoose.model('Ysl', yslSchema);

module.exports = YslModel;