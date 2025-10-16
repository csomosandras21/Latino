const Valentino = require('../models/Vall');

exports.getAllValentinosFrontend = async (req, res) => {
    try {
        const valentinos = await Valentino.find({});
        console.log(valentinos);
        
        return res.json({valentinos});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}