const mongoose = require('mongoose');

const parfumeSchema = new mongoose.Schema(
    {
        marka: {
            type: String,
            require: true,
        },
        nev: {
            type: String,
            require: true,
        },
        fajta: {
            type: String,
            require: true,
        },
        ar: {
            type: Number,
            require: true,
        },
        kedvezmeny: {
            type: Number,
            require: true,
        },
        kep: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

const ParfumeModel = mongoose.model('parfume', parfumeSchema);

module.exports = ParfumeModel;
