const mongoose = require('mongoose');

const bossSchema = new mongoose.Schema(
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
    

const BossModel = mongoose.model('boss', bossSchema);

module.exports = BossModel;