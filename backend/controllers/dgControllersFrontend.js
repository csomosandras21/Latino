const Dg = require('../models/Dg');

exports.getAllDgsFrontend = async (req, res) => {
    try {
        const dgs = await Dg.find({});
        // console.log(diors);
        
        return res.json({dgs});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}