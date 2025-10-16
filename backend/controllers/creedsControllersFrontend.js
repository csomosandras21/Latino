const Creed = require('../models/Creed');

exports.getAllCreedsFrontend = async (req, res) => {
    try {
        const creeds = await Creed.find({});
        // console.log(diors);
        
        return res.json({creeds});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}