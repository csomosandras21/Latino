const Armani = require('../models/Armani');

exports.getAllArmanisFrontend = async (req, res) => {
    try {
        const armanis = await Armani.find({});
        console.log(armanis);
        
        return res.json({armanis});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}