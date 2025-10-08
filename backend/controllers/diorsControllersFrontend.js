const Dior = require('../models/Dior');

exports.getAllDiorsFrontend = async (req, res) => {
    try {
        const diors = await Dior.find({});
        // console.log(diors);
        
        return res.json({diors});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}