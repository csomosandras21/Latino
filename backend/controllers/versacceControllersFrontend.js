const Versacce = require('../models/Vers');

exports.getAllVersaccesFrontend = async (req, res) => {
    try {
        const versacces = await Versacce.find({});
        // console.log(diors);
        
        return res.json({versacces});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}