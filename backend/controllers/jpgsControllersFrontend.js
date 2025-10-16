const Jpg = require('../models/Jpg');

exports.getAllJpgsFrontend = async (req, res) => {
    try {
        const jpgs = await Jpg.find({});
        // console.log(diors);
        
        return res.json({jpgs});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}