const Parfume = require('../models/Parfume');
const { markak, kedvezmenyek } = require('../public/js/adatok');

exports.getNewParfumeBackend = (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('new-parfume.ejs', { markak, kedvezmenyek });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};

exports.postNewParfumeBackend = async (req, res) => {
    try {
        const { marka, nev, fajta, ar, kedvezmeny, kep } = req.body;
        console.log({ marka, nev, fajta, ar, kedvezmeny, kep });

        const newParfume = new Parfume({
            marka,
            nev,
            fajta,
            ar,
            kedvezmeny,
            kep,
        });

        await newParfume.save();

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' + error });
    }
};
