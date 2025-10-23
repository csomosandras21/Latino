const Parfume = require('../models/Parfume');
const { markak, kedvezmenyek } = require('../public/js/adatok');

exports.getAllParfumesBackend = async (req, res) => {
    try {
        const parfumes = await Parfume.find({});
        res.statusCode = 200;
        return res.render('parfumes.ejs', { parfumes, markak, kedvezmenyek });
    } catch (error) {
        res.statusCode = 500;
        // return res.json({ msg: 'Valami hiba!' + error });
        return res.render('404.ejs');
    }
};

exports.deleteOneParfumeBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const parfume = await Parfume.findByIdAndDelete({ _id: id });

        res.statusCode = 204;
        return res.json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};

exports.getOneParfumeBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const parfume = await Parfume.findById({ _id: id });

        res.statusCode = 200;
        return res.render('parfume.ejs', { parfume, markak, kedvezmenyek });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
};

exports.updateOneParfumeBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const { marka, nev, fajta, ar, kedvezmeny, kep } = req.body;
        const parfume = await Parfume.findByIdAndUpdate(
            { _id: id },
            {
                marka,
                nev,
                fajta,
                ar,
                kedvezmeny,
                kep,
            }
        );

        res.statusCode = 200;
        return res.json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' });
    }
};
