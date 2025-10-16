const mongoose = require('mongoose');

const versSchema = new mongoose.Schema(
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
    

const VersModel = mongoose.model('versacce', versSchema);

module.exports = VersModel;