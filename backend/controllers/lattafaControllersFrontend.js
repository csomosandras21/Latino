const Lattafa = require('../models/Lattafa');

exports.getAllLattafasFrontend = async (req, res) => {
    try {
        const lattafas = await Lattafa.find({});
        // console.log(diors);
        
        return res.json({lattafas});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: "Hiba"});
    }
}