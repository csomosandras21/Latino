const Gucci = require('../models/Gucci');

exports.getAllGuccisFrontend = async (req, res) => {
    try {
        const guccis = await Gucci.find({});
        // console.log(diors);
        
        return res.json({guccis});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}