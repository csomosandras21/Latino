const Burberry = require('../models/Burbbery');

exports.getAllBurberrysFrontend = async (req, res) => {
    try {
        const burberrys = await Burberry.find({});
        // console.log(diors);
        
        return res.json({burberrys});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}