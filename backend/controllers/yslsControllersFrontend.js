const Dior = require('../models/Ysl');

exports.getAllYslsFrontend = async (req, res) => {
    try {
        const ysls = await Ysl.find({});
        // console.log(diors);
        
        return res.json({ysls});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}