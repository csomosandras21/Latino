const Parfume = require('../models/Parfume');
const { markak, kedvezmenyek } = require('../public/js/adatok');

exports.getAllParfumesFrontend = async (req, res) => {
    try {
        const parfumes = await Parfume.find({});
        res.statusCode = 200;
        return res.json({ parfumes, markak, kedvezmenyek });
    } catch (error) {
        res.statusCode = 500;
        // return res.json({ msg: 'Valami hiba!' + error });
        return res.json({msg: 'Valami hiba!'});
    }
};
